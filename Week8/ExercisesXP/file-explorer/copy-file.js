// Exercise 7: Reading and Copying Files (pt.1)

// 1. Create a directory named file-explorer.
// 2. Inside the file-explorer directory, create a file named copy-file.js.
// 3. In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.

const fs = require('fs');

fs.copyFile('source.txt', 'destination.txt', err=> {
    if(err) return console.log(err.message);
});