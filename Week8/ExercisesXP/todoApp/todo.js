// Exercise 4: Todo List using ES6 module syntax (pt.1)

// 1. Create a directory named todoApp.
// 2. Inside the todoApp directory, create two files: todo.js and app.js.
// 3. In todo.js, define an ES6 module that exports a TodoList class.
// 4. The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
// 5. Export the TodoList class.

export class TodoList {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    };
    addTask(taskName) {
        this.tasks.push({name:taskName, done:false});
        console.log(`Task added: ${taskName}`)
    };
    markComplete(taskName) {
        for (let task of this.tasks) {
            if (task.name === taskName) {
                task.done = true;
                console.log(`Task completed: ${taskName}`);
            }
        }
    };
    listAllTasks() {
        console.log(this.name + ':');
        for (let task of this.tasks) {
            let checkboxMark = task.done ? 'X': ' ';
            console.log(`[${checkboxMark}] ${task.name}`)
        }
    }
}