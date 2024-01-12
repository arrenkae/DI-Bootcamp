// Daily Challenge: Node.js App & NPM

// Task 3: Advanced File Operations (pt.1)

// 1. Inside the daily-challenge directory, create a directory named files.
// 2. Inside the files directory, create a file named file-data.txt and add some text content to it.
// 3. Create a file named read-file.js.
// 4. In read-file.js, require the fs module and read the content from the file-data.txt file. Display the content in the terminal.

import { promises as fs } from 'fs';

export const readFile = async(filePath) => {
    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch (error) {
        console.log(error.message);
    }
}