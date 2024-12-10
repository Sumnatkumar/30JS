var argumentsLength = function(...args){
    // return args.length;
    let count = 0;
    for(let i = 0; i < args.length; i++){
        count += 1;
    }
    return count;
}
console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength("a", "b", "c", "d")); // Output: 4
console.log(argumentsLength()); // Output: 0
