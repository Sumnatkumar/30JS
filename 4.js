var createCounter = function(init){
    const n = init;
    var obj ={
        increment(){
            return init += 1;
        },
        decrement(){
            return init -= 1;
        },
        reset(){
            return init = n;
        }
    }
    return obj;
};

const counter = createCounter(10);

console.log(counter.increment());  // 11
console.log(counter.increment());  // 12
console.log(counter.decrement());  // 11
console.log(counter.reset());      // 10 (reset to initial value)
