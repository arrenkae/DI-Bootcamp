// Exercise 1 : File Management and Path Manipulation (pt.2)

// 7. Create another file named app.js in the same directory.
// 8. In app.js, require the file-info.js module and call the function you’ve written to display information about the file.
// 9. Run app.js using Node.js and verify that the file’s existence, size, and creation time are displayed in the terminal.

import { displayFileInfo } from "./file-info.js";

console.log(displayFileInfo('data', 'example.txt'));