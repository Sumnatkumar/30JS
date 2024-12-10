var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve , reject)=>{
            setTimeout(()=>{reject("Time Limit Exceeded")},t)

            fn(...args).then(resolve).catch(reject)
        })
    }
};
const limited = timeLimit(async (n) => {
    await new Promise((res) => setTimeout(res, n));
    return "Completed";
}, 1000);

limited(500).then(console.log).catch(console.error); // Output: "Completed"
