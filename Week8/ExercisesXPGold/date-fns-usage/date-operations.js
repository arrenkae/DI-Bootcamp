// Exercise 3 : Working with Dates Using the date-fns Module (pt.1)

// 1. Create a directory named date-fns-usage.
// 2. Inside the date-fns-usage directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// 3. Install the date-fns package by running npm install date-fns in the terminal. date-fns is a library for working with dates and times.
// 4. Create a file named date-operations.js inside the date-fns-usage directory.
// 5. In date-operations.js, require the date-fns package and perform the following operations:
//     - Get the current date and time.
//     - Add 5 days to the current date.
//     - Format the resulting date as a string.
//     - Display the formatted date in the terminal.

import { format, addDays } from 'date-fns';

export const showFutureDate = (days) => {
    const currentDate = new Date();
    const futureDate = addDays(currentDate, days);
    console.log(format(futureDate, 'dd/MM/yyyy'));
}