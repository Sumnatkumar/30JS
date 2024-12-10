var flat = function (arr, n){
    if(n === 0){
        return arr.slice()
    }
    let flatarr = []

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            const nested = flat(arr[i], n - 1)
            flatarr.push(...nested)
        }else{
            flatarr.push(arr[i])
        }
    }
    return flatarr
}
const arr = [1, [2, [3, [4]], 5]];
console.log(flat(arr, 1));
// Output: [1, 2, [3, [4]], 5]
console.log(flat(arr, 2));
// Output: [1, 2, 3, [4], 5]
