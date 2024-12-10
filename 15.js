var cancellable = function(fn, args, t){
    fn(...args)
    let timer = setInterval(()=>{
        fn(...args)
    }, t)

    let cancelFn = () => clearInterval(timer);
    return cancelFn
}
const fn = (x) => console.log(x);

const cancel = cancellable(fn, ["Hello, world!"], 1000); // Start immediately, then every 1 second

setTimeout(() => {
    cancel(); // Stop the interval after 5 seconds
    console.log("Execution canceled!");
}, 5000);
