var compose = function(functions){

    return function(x){
        for(let i = functions.length - 1; i >= 0; i--){
            x = functions[i](x);
        }
        return x;
    };
};
const add1 = x => x + 1;
const multiplyBy2 = x => x * 2;

const composedFunction = compose([add1, multiplyBy2]);
console.log(composedFunction(5)); // Output: 11 (5 * 2 + 1)
