// Daily Challenge: Node.js App & NPM

// Task 2: Using an NPM Module (pt.2)

// 5. Create another file named app.js
// 6. In app.js, require the colorful-message.js module and call the function you’ve written to display the colorful message.
// 7. Run app.js using Node.js and see the colorful message.

import { colorfulMessage } from './colorful-message.js';

console.log(colorfulMessage('Hello world'));