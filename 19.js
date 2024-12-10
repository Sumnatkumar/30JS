var promiseAll = function(functions){
    return new Promise((resolve, reject) =>{
        let res = Array(functions.length)
        let waitingFor = functions.length

        for(let i = 0; i < functions.length; i++){
            functions[i]()
                .then((result) => {
                    res[i] = result;
                    waitingFor--;
                    if(waitingFor === 0)resolve(res)
                }).catch(reject)
        }
    })
};
const promise1 = () => new Promise((res) => setTimeout(() => res(1), 300));
const promise2 = () => new Promise((res) => setTimeout(() => res(2), 200));
const promise3 = () => new Promise((res) => setTimeout(() => res(3), 100));

promiseAll([promise1, promise2, promise3]).then(console.log).catch(console.error);
// Output: [1, 2, 3]
