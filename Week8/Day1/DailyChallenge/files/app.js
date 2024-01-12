// Daily Challenge: Node.js App & NPM

// Task 3: Advanced File Operations (pt.2)

// 5. Create another file named app.js.
// 6. In app.js, require the read-file.js module and call the function you’ve written to display the file’s content.
// 7. Run app.js using Node.js and see the content of the file.

import { readFile } from './read-file.js';

readFile('file-data.txt');