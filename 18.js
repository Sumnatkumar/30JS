var debounce = function(fn, t){
    let timer
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t)
    }
}
const log = debounce((message) => console.log(message), 1000);

log("Hello"); // Call #1 (timer starts)
log("World"); // Call #2 (resets timer)

// After 1 second, only "World" will be logged
