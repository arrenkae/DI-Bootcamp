// Daily Challenge: Node.js App & NPM

// Task 3: Advanced File Operations (pt.1)

// 1. Inside the daily-challenge directory, create a directory named files.
// 2. Inside the files directory, create a file named file-data.txt and add some text content to it.
// 3. Create a file named read-file.js.
// 4. In read-file.js, require the fs module and read the content from the file-data.txt file. Display the content in the terminal.

import fs from 'fs';

export const readFile = (filename) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if(err) return console.log(err.message);
        console.log(data);
    })
}