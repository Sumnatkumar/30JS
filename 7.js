var reduce = function(nums, fn, init){
    let total = init;
    for(let i = 0; i < nums.length; i++) {
        total = fn(total, nums[i]);
    }
    return total;
}
const input = [1, 2, 3, 4];
const sum = reduce(input, (total, num) => total + num, 0);
console.log(sum); // Output: 10
