// Exercise 4 : Faker Module

// 1. Install the faker module, and read the documentation.
// 2. Create an empty array called users. Tip: It’s an array of objects
// 3. Create a function that adds objects to the users array. Each user has the properties: name, address street and country. Use faker to populate them with fake data.
// 4. Bonus : Find a node module that allows to prompt the user for his name, address street and country in order to add this information into the users array.

import { addFakeUsers } from "./fakeusers.js";
import { userPrompt } from "./userprompt.js";

let myUsers = [];

addFakeUsers(myUsers, 5);
userPrompt(myUsers);