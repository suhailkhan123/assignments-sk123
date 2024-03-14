/* ## Counter without setInterval
Without using setInterval, try to code a counter in Javascript. 
There is a hint at the bottom of the file if you get stuck.
 */

function givePromise() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });
}

async function counter() {
    i = 1;
    console.log("Counter 2: " + i++);
    for (;;) {
        await givePromise();
        console.log("Counter 2: " + i++);
    }
}

counter();

// Alternate solution
/* function counter(seconds) {
    console.log(seconds);
    if (seconds > 0) {
      setTimeout(function() {
        counter(seconds - 1);
      }, 1000);
    }
  } */







































































// (Hint: setTimeout)