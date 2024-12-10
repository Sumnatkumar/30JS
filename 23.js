Array.prototype.groupBy = function(fn){
    return this.reduce((grouped, item) => {
        const key = fn(item)
        if(!grouped[key]){
            grouped[key] = [];
        }
        grouped[key].push(item);
        return grouped
    }, {})
};
const arr = ["one", "two", "three", "four"];
const grouped = arr.groupBy((item) => item.length);
console.log(grouped);
// Output: { 3: ['one', 'two'], 5: ['three'], 4: ['four'] }
