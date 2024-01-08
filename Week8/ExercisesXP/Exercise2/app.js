// Exercise 2: Advanced Module Usage using ES6 module syntax

// 4. Create another file named app.js.
// 5. In app.js, import the array of person objects from the data.js module.
// 6. Write a function that calculates and prints the average age of all the persons in the array.
// 7.  Use the imported array and the average age function in app.js.
// 8. Run app.js and confirm that the average age is correctly calculated and displayed.

import { people } from './data.js';

const calcAvgAve = (people) => {
    let total = 0;
    for (let person of people) {
        total += person.age;
    }
    return total / people.length;
}

console.log(calcAvgAve(people));