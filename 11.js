function memoize(func){
    let cache = {};
    return function(...args){
        // let n = args[0];
        let n = JSON.stringify(args);
        if(n in cache){
            return cache[n];
        }else{
            // let result = func(n);
            let result = func.apply(this, args);
            cache[n] = result;
            return result;
        }
    }
}

const fib = memoize(function(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
});

console.log(fib(10)); // Output: 55
console.log(fib(20)); // Output: 6765
