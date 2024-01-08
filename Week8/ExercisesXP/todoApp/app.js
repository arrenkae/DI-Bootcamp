// Exercise 4: Todo List using ES6 module syntax (pt.2)

// 6. In app.js, import the TodoList class from the todo.js module.
// 7. Create an instance of the TodoList class.
// 8. Add a few tasks, mark some as complete, and list all tasks.
// 9. Run app.js and verify that the todo list operations are working correctly.

import { TodoList } from './todo.js';

const myTasks = new TodoList('My tasks');
myTasks.addTask('Get out of bed');
myTasks.addTask('Go to class');
myTasks.addTask('Finish exercises XP');
myTasks.addTask('Get groceries');
myTasks.markComplete('Get out of bed');
myTasks.markComplete('Go to class');
myTasks.listAllTasks();