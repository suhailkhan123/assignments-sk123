/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */
setInterval(counter, 1000);
function counter() {
    let date = new Date();
    let hours = date.getHours();
    let AMPM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    console.log(hours + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + AMPM);
}