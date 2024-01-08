// Exercise 5: Creating and Using a Custom Module (pt.2)

// 6. Create a file named app.js in the same directory.
// 7. In app.js, require the lodash package and the custom math module.
// 8. Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.
// 9. Run app.js using Node.js and verify that the calculations are correct.

const lodash = require('lodash');
const math = require('./math.js');

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = lodash.map(numbers, (num) => math.multiTwo(num, 2));
const result = lodash.reduce(doubleNumbers, (acc, num) => math.sumTwo(acc, num), 0);
console.log(result);