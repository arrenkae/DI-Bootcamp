// Exercise 5: Creating and Using a Custom Module (pt.1)

// 1. Create a directory named math-app.
// 2. Inside the math-app directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 3. Install the lodash package, a utility library, by running npm install lodash in the terminal.
// 4. Create a file named math.js inside the math-app directory.
// 5. In math.js, define a simple custom module that exports functions for addition and multiplication.

const sumTwo = (a, b) => {
    return a + b;
};

const multiTwo = (a, b) => {
    return a * b;
};

module.exports = { sumTwo, multiTwo };