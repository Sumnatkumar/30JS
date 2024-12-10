var map = function(arr, fn) {
    const newarr = [];
    for(let i = 0; i < arr.length; i++) {
        newarr[i] = fn(arr[i],i);
    }
    return newarr;
}
const input = [1, 2, 3];
const output = map(input, (x, i) => x * 2 + i); // Doubling the element and adding its index
console.log(output); // Output: [2, 5, 8]

if (!Array.isArray(arr)) {
    throw new TypeError('The first argument must be an array.');
}

newarr.push(fn(arr[i], i));
