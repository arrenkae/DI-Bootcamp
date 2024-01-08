import { getUsers } from './script.js';

getUsers().then(data => console.log(data)).catch(err => console.log(err));