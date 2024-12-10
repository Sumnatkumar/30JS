// normal function
// function f(a,b){
//     const sum = a+ b;
//     return sum;
// }
// console.log(f(2,3))
// Anonymous function

// let f = function(a,b){
//     const sum = a +b;
//     return sum
// }
// console.log(f(2,4));
// Immediate invoke

// let f = function(a,b){
//     const sum = a+b;
//     return sum;
// }(2,4);
// console.log(f);

// Arrow function
// let f = (a,b) =>{
//     const sum = a + b;
//     return sum;
// }
// console.log(f(2,4));
// function within function

// function fun(){

//     function f(a,b){
//         const sum = a+b;
//         return sum;
//     }
//     return f;
// }

// var numsum = fun();
// console.log(numsum(2,3));

// function fun(){

//     var a = 6;
//     function f(b){
//         var sum = a + b;
//         return sum;
//     }
//     a = 5;
//     return f;
// }

// var numsum = fun();
// console.log(numsum(2));

//Object is a collection of key value pairs

//Object Literals
// var obj = {
//     name:"Chirag",
//     age:18,

//     greet(name){
//         return "good morning" +" "+ name;
//     }
// }

// console.log(obj.greet("Sumant"));

// objects within function

// function Calc(val){
//     function add(val1){    
//         var a = val + val1
//             return a
//     }
//     function sub(val1){
//         var b = val - val1
//             return b
//     }
//     return{
//         add , sub
//     }
// }

// console.log(Calc(5).add(3));
// console.log(Calc(5).sub(5));

// var arr = new Array(3);
// arr[0] = 2;
// arr[1] = 4;
// arr[2] = 2;
// console.log(arr);

// let arr = [{
//     fname : "Sumant",
//     age : 18
// },
// {   fname:"Kumar",
//     age: 19
// }];
// console.log(arr);

// var num = [1,2,3,4,5];
// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// var num = [1,2,3,4,5];
// var a = num.map((n , i, num) => {
//     return n + i;
// });

// function fun(n){
//     return n + 1;
// }

// console.log(a);
// console.log(num);

// array.map(function(currentValue, index,arr));

// array.filter(function(currentValue, index,arr))

// const ages = [19,12,23,21,5];
// const result = ages.filter(checlAdult)

// function checlAdult(age){
//     return age >= 18;
// }

// console.log(ages);
// console.log(result);

// let arr = [1,2,3,4,5]
// let sum = arr.reduce(addNum);

// function addNum(a,b){
//     console.log(a);
//     console.log(b);
//     console.log()

//     return a+b;
// }

// console.log(sum);

// Array.reduce(function(total, currentValue, currentIndex, arr));

// function add(args){
//     return args[0] + args[1];
// }
// function mulTwo(val){
//     return val*2;
// }
// function square(val){
//     return val*val;
// }
// function addsquare(a,b){
//     return square(add(a,b));
// }
// // const result = add(2, 3);
// // console.log(square(result));

// console.log(addsquare(3,4));

// function compose(f1, f2){
//     return function(a,b){
//         return f2(f1(a,b));
//     }
// }

// const composeTwo = (f1,f2,f3) => (a,b) => f3(f2(f1(a,b)));

// const result = composeTwo(add, mulTwo,square);
// console.log(result(2,3));

// function composeAll(...funs){
//     return function(...values){
//         return funs.reduce((val, fn) => fn(val), values)
//     }
// }

// const composeAll =
// (...funs) =>
// (...values) =>
//     funs.reduce((val, fn) => fn(val) , values)

// const result = composeAll(add, mulTwo,square);
// console.log(result(2,3));

// function square(n){
//     return n*n;
// }

// function memoize(func){
//     let cache = {};
//     return function(...args){
//         let n = args[0];
//         if(n in cache){
//             return cache[n];
//         }else{
//             let result = func(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }

// console.time();
// // console.log(square(5));
// let effResult = memoize(square);
// console.log(effResult(5));
// console.timeEnd();

// console.time();
// // console.log(square(5));
// // let effResult = memoize(square);
// console.log(effResult(5));
// console.timeEnd();
// synchronous = Executes line by line consecutively in a sequential manner.
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to ve performed concurrently
//                without waiting.
//                Doesn't block the execution flow and allows the program to
//                continue.
//                (I/O operations, network requests , fetching data)
//                Handled with Callbacks, Promises , Async/Awaits.

// setTimeout(function(){
//     console.log("Sumant1"),5000
// })
// console.log("Sumant2");
// console.log("Sumant3");

//Promises

// const myPromise = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("async Task")
//         resolve()
//     },2000)
// })
// myPromise.then(function(){
//     console.log("Promise Resolved")
// })

// new  Promise((resolve, reject ) => {
//     let fileLoader = false;
//     if(fileLoader){
//         resolve("File Loaded")
//     }else{
//         reject("File Not Loaded")
//     }
// })

// Promise.then(function(value){
//     console.log(value);
// }).catch(error => console.log(error));

//Async/Await = Async = makes a function return a promise
//              Await = makes an function wait for a promise


// function loadFile(){
//     return new Promise((resolve , reject) => {
//         let fileLoader = true;
//         if(fileLoader){
//             resolve("File Loaded")
//         }else{
//             reject("File Not Loaded");
//         }
//     })
// }

// async function myFunction(){
//    try{
//     const value = await loadFile();
//     console.log(value);
//    }catch(error){
//     console.log(error);
//    }
// }

// myFunction()

// setTimeout() = function in Javascript that allows you to schedule the
//                execution of a function after an amount
//                of time (milliseconds)

                //setTimeout(callback, delay)

// function greet(){
//     console.log("Hello Everyone");
// }

// const timeoutID = setTimeout(function(){
//     console.log("Hello Everyone");
// }, 3000);

// clearTimeout(timeoutID);

// function test(){
//     console.log("Learn With Sumant");
// }

// const stop = setInterval(test,1000);

// setTimeout(() =>{
//     clearInterval(stop);
// },5000)

// let myMap = new Map([
//                 ['name','Sumant'],
//                 [true, 'Boolkey'],
//                 [1 , 'Numberkey'],
// ])
// myMap.set('age', 20);
// // console.log(myMap);

// // console.log(myMap.get('name'));
// // console.log(myMap.has('gender'));
// myMap.delete('name');
// console.log(myMap);

// JSON -> JavaScript Object Notification

//         It is a text-based format for exchanging data
//         between web clients and servers.
//         
//         It is a lightweight format for storing and
//         transporting data.

// let text = `[1,2,3,4]`

// let json = JSON.parse(text)
// console.log(json)

//console.log(JSON.stringify(json)) 

// Lodash - Lodash is a utility library for JavaScript,
//          providing functions to work with
//          arrays, objects, strings, etc.
// Syntax -
// _.chunk(Array, size)

//Example
// const abc = require("lodash")
// let arr = [1,2,3,4,5,6]

// // Making chunks of size 1
// console.log(abc.chunk(arr, 1)) 
