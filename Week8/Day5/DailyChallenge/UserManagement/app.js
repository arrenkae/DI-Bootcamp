import express from 'express';
import path from 'path';
import { router } from './routes/routes.js';


// Daily Challenge : Task API #2

// Create a User Management API with Registration and Login using Express.js, Bcrypt, and JSON File Storage

// 1. Create 2 HTML files: one for the Login form and the other for the Register form (when the inputs are empty the submit button should be disabled).
// 2. Set up a new Express.js application.
// 3. Implement the following routes using express.Router:

// - POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
// - POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// - GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
// - GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
// - PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required).

// 4. Create a JSON file (e.g., users.json) to store user data. Initialize it with an empty array [].
// 5. Use bcrypt to hash user passwords before storing them in the JSON file and for verifying passwords during login.
// 6. Implement error handling for file read/write operations, route validation, and incorrect login credentials.
// 7. Test your API using tools like Postman or curl.


const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000, () => {
    console.log('Server runs on port 3000');
});

app.use('/', express.static(__dirname + '/public'));
app.use('/', router);