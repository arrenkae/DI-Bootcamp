// Exercise 7: Reading and Copying Files (pt.2)

// 4. Create another file named read-directory.js.
// 5. In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.
// 6. Open a terminal in the file-explorer directory.
// 7. Run node copy-file.js to copy the content from source.txt to destination.txt.
// 8. Run node read-directory.js to list the files in the directory.

const fs = require('fs');

fs.readdir('./', (err, files) => {
    if(err) return console.log(err.message);
    console.log('files: ', files)
});