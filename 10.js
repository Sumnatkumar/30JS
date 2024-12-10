var once = function(fn){
    let called = false;
    return function(...args){
        if(called){
            return undefined;
        }
        called = true;
        return fn(...args);
    }
}

const logOnce = once((msg) => console.log(msg));
logOnce("Hello"); // Logs: "Hello"
logOnce("World"); // No output (returns undefined)
