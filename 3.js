var expect = function(val){
    obj ={
        toBe(val1){
            if(val === val1) return true;
            else throw new Error("Not Equal");
        },
        notToBe(val1){
            if(val !== val1) return true;
            else throw new Error("Equal");
        }
    }
    return obj;
}
try {
    expect(5).toBe(5);  // No error, returns true
    expect(5).toBe(10); // Throws error: "Values are not equal"
} catch (e) {
    console.error(e.message);  // Will log: "Values are not equal"
}

try {
    expect(5).notToBe(10);  // No error, returns true
    expect(5).notToBe(5);   // Throws error: "Values are equal"
} catch (e) {
    console.error(e.message);  // Will log: "Values are equal"
}
