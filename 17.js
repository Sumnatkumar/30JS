class TimeLimitedCache {
    constructor(){
        this.cache = new Map();
    }

    set(key, value, duration){

        const alreadyExists = this.cache.get(key);
        if(alreadyExists)
        {
            clearTimeout(alreadyExists.timeoutId)
        }

        const timeoutId = setTimeout(()=>{
            this.cache.delete(key);
        },duration);
        this.cache.set(key,{value,timeoutId});
        return Boolean(alreadyExists)
    }
    get(key) {
        if(this.cache.has(key)){
            return this.cache.get(key).value;
        }
        return -1;
    }
    count(){
        return this.cache.size;
    }
}
const cache = new TimeLimitedCache();

console.log(cache.set(1, 42, 1000)); // Output: false (new key)
console.log(cache.get(1));          // Output: 42
setTimeout(() => console.log(cache.get(1)), 1500); // Output: -1 (key expired)

console.log(cache.set(1, 42, 1000)); // Output: false (new key)
console.log(cache.set(1, 84, 1000)); // Output: true (key already existed)
console.log(cache.count());          // Output: 1
