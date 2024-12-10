var join = function (arr1, arr2) {
    const result = {}
    for(let i = 0; i < arr1.length; i++){
        result[arr1[i].id] = arr1[i]
    }
    for(let i = 0; i < arr2.length; i++){
        if(result[arr2[i].id]){
            for(const key in arr2[i])
                result[arr2[i].id][key] = arr2[i][key]
        }else {
            result[arr2[i].id] = arr2[i]
        }
    }
    return Object.values(result)
}
const arr1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

const arr2 = [
    { id: 2, age: 30 },
    { id: 3, name: "Charlie", age: 25 },
];
