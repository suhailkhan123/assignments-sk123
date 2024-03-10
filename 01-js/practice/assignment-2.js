const date = new Date();
let time1 = date.getTime();
setTimeout(whatTime, 3000);
function whatTime() {
    console.log((new Date().getTime() - time1 - 3000)/1000 + " Seconds");
}