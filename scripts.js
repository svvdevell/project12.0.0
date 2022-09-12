"use strict"

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 3000);
    setTimeout(() => reject(Error), 3000);
});

console.log(promise);
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => console.log("Promise was finished!"));


const getResultPromise = async () => {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Promise was finished!");
    }
};
getResultPromise();

