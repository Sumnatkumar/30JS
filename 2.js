var createCounter = function(n){
    let count = n;
    return function(){
        return count++
    };
};
const counter = createCounter(10);
const calls = ["call", "call", "call"];

calls.forEach(() => {
    console.log(counter());  // Calling counter() for each element in the array
});
