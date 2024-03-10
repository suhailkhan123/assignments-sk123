function sum(num1, num2, funToCall) {
    let result = num1 + num2;
    funToCall(result);
}
function displayResult(data) {
    console.log("Result of the sum is : " + data);
}
function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}
const value = sum(1, 2, displayResultPassive);
// You are only allowed to call one function after this
// How will you displayResult of a sum