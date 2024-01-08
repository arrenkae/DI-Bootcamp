// Daily Challenge: Node.js App & NPM (pt.3)

// Task 2: Using an NPM Module

// 1. Inside the daily-challenge directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 2. Install the chalk package by running npm install chalk in the terminal.
// 3. Create a file named colorful-message.js.
// 4. In colorful-message.js, require the chalk package and use it to create and display a colorful message in the terminal.

import chalk from 'chalk';

export const colorfulMessage = (message) => {
    const colors = ['red', 'yellow', 'green', 'blue', 'magenta'];
    let messageColored = '';
    for (let i=0, j=0; i < message.length; i++) {
        messageColored += chalk[colors[j]](message[i]);
        if (message[i] != ' ') {j++};
        if (j >= colors.length) {j = 0};
    };
    return(messageColored);
}