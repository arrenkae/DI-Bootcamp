// Exercise 1 : File Management and Path Manipulation (pt.1)

// 1. Create a directory named file-management.
// 2. Inside the file-management directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 3. Create a directory named data inside the file-management directory.
// 4. Inside the data directory, create a file named example.txt and add some content to it.
// 5. Create a file named file-info.js inside the file-management directory.
// 6. In file-info.js, require the path and fs modules and implement the following functionality:
//     - Use the path.join function to create a file path to the example.txt file within the data directory.
//     - Use the fs.existsSync function to check if the file exists.
//     - Use the fs.statSync function to get information about the file, such as size and creation time.
//     - Display the file’s existence, size, and creation time in the terminal.

import fs from 'fs';
import path from 'path';

export const displayFileInfo = (folder, filename) => {
    const filePath = path.join(folder, filename);
    let fileExists = fs.existsSync(filePath);
    if (fileExists) {
        let fileInfo = fs.statSync(filePath);
        return `File ${filePath} exists, size: ${fileInfo.size}kb, creation time: ${fileInfo.birthtime}`;
    } else {
        return `File ${filePath} doesn't exist`;
    }
}

