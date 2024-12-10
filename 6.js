var filter = function(arr, fn){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
const input = [1, 2, 3, 4, 5];
const output = filter(input, (x, i) => x % 2 === 0); // Keep even numbers
console.log(output); // Output: [2, 4]
