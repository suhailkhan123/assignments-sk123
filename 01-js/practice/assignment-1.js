// JS Assignment 1
let counter = 30;
function countDown() {
    if (counter >= 0) {
        console.log(counter--);
    }
}
setInterval(countDown, 1*100);