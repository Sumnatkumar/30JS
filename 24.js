var sortBy = function(arr, fn){
    return arr.sort((a, b) => fn(a) - fn(b))
};
const nums = [-10, -5, 0, 5, 10];
const sorted = sortBy(nums, Math.abs);
console.log(sorted);
// Output: [0, -5, 5, -10, 10]
