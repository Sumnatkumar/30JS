var compactObject = function(obj){
    if(obj === null){
        return obj;
    }

    if(typeof obj !== "object"){
        return obj;
    }

    if(Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject)
    }

    const compacted = {}
    for(const key in obj){
        let value = compactObject(obj[key])
        if(value){
            compacted[key] = value
        }
    }
    return compacted
};
const data = {
    a: null,
    b: [false, 1, null, { c: 0, d: 2 }],
    e: {
        f: "",
        g: "hello",
        h: { i: undefined, j: "world" },
    },
    k: 0,
};
// console.log(compactObject(data));
// {
//     b: [1, { d: 2 }],
//     e: {
//         g: "hello",
//         h: { j: "world" }
//     }
// }
