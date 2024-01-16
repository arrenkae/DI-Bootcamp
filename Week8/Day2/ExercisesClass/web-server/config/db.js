const knex = require('knex');
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME
    }
});

const users = [
    {id:1, name:'John', email:'jjj@gmail.com'},
    {id:2, name:'Marry', email:'mmm@gmail.com'},
    {id:3, name:'Anne', email:'aaa@gmail.com'},
];

const products = [
    { id: 1, name: "item1", desc: "something something 1" },
    { id: 2, name: "item2", desc: "something something 2" },
    { id: 3, name: "item3", desc: "something something 3" },
]

module.exports = { db, users, products };