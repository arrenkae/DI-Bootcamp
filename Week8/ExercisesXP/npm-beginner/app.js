// Exercise 6: Simple NPM Package Usage

// 1. Create a directory named npm-beginner.
// 2. Inside the npm-beginner directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 3. Install the chalk package, which provides easy coloring for terminal output, by running npm install chalk in the terminal.
// 4. Create a file named app.js inside the npm-beginner directory.
// 5.  In app.js, require the chalk package and use it to color and style text in the terminal.
// 6. Write a simple script that uses chalk to print a colorful message.
// 7. Run app.js using Node.js and observe the colorful output in the terminal.

import chalk from 'chalk';

console.log(chalk.red('Richard ') + chalk.hex('#ff8800')('Of ') + chalk.yellow('York ') + chalk.green('Gave ') + chalk.blue('Battle ') + chalk.hex('#3F00FF')('In ') + chalk.hex('#9400d3')('Vain'));
