/** Module system
 * 1. Made module
 * 2. Core / built in module
 * 3. NPM - Node Package Manager
 */

const { hello } = require('./greeting.js');

hello('John');

const { multiplyTwo } = require('./mathstuff.js');

multiplyTwo(7, 8);