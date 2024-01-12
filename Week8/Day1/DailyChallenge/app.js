// Daily Challenge: Node.js App & NPM

// Task 1: Basic Module System (pt.2)

// 4. Create another file named app.js in the same directory.
// 5. In app.js, require the greeting.js module and use the greet function to greet a user.
// 6. Run app.js using Node.js and see the greeting message.

import { greet } from './greeting.js';

console.log(greet('Nadia'));