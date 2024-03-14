/* ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const data = 'This is the data that I want to write to the file.';
const fs = require('fs');
fs.writeFile("a.txt", data, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("File written successfully");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("a.txt", "utf8"));
    }
});