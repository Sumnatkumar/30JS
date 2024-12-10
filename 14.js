var cancellable = function(fn, args, t){

    const cancelFn = function(){
        clearTimeout(timer)
    }
    const timer = setTimeout(() =>{
        fn(...args)
    },t)
    return cancelFn;
}
const fn = (x) => console.log(x);

const cancel = cancellable(fn, ["Hello, world!"], 2000); // Schedule function

// Cancel the execution before it happens
setTimeout(() => {
    cancel(); // Cancels the scheduled execution
    console.log("Execution canceled!");
}, 1000);
