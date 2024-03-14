/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` */
const fs = require('fs');
fs.readFile("b.txt", "utf-8", function(err, data) {
    data = data.replace(/\s+/g, ' ');
    fs.writeFile("b.txt", data, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Data is written successfully in file");
        }
    });
});