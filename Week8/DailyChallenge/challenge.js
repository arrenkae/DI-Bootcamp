// Daily Challenge: Node.js App & NPM

// Challenge Task: Integrating Everything

// 1. Create a file named challenge.js.
// 2. In challenge.js, require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.
// 3. Use the greet function to greet the user, display the colorful message, and read and display the file’s content.
// 4. Run challenge.js using Node.js and see the complete challenge in action.

import { greet } from './greeting.js';
import { colorfulMessage } from './colors/colorful-message.js';
import { readFile } from './files/read-file.js';

console.log(colorfulMessage(greet('Nadia')));
readFile('./files/file-data.txt');