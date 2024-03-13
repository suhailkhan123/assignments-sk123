/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function wait(n) {
    let promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, n * 1000);
        // both does the same thing, above and below setTimeout() functions
        // setTimeout(resolve, n * 1000);
    });
    return promise;
}

module.exports = wait;
