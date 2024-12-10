var chunk = function(arr, size){
    let result = []

    for(let i = 0; i < arr.length; i += size){
        result.push(arr.slice(i, i+ size));
    }
    return result;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [[1, 2, 3], [4, 5, 6], [7]]

console.log(chunk([1, 2, 3, 4, 5], 2));
// Output: [[1, 2], [3, 4], [5]]

console.log(chunk([], 3));
// Output: []
