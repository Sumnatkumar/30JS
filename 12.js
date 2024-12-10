var addTwoPromises = async function (promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2]);

    return val1 + val2;
}
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(7);

addTwoPromises(promise1, promise2).then(console.log); // Output: 10
