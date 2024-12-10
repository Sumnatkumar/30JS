// function createHelloWorld(){
//     function f(){
//         return "Hello World";
//     }
//     return f;
// }
var  createHelloWorld = function(){
    return function(){
        return "Hello World";
    }
}
const helloWorldFunction = createHelloWorld();  // Returns the function `f`
console.log(helloWorldFunction([{},null,42]));  // Calls the function `f` and logs "Hello World"
