setInterval(whatTime, 1000);
function whatTime() {
    let date = new Date();
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}
