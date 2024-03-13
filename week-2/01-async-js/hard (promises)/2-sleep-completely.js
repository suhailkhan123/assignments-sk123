/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) {
    let value = await createPromise(milliseconds);
    return value;
}

function createPromise(milliseconds) {
    let promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, milliseconds);
    });
    return promise;
}

module.exports = sleep;
