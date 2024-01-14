const knex = require('knex');

const db = knex({
    client: 'postgres',
    connection: {
      host : 'cornelius.db.elephantsql.com', // '127.0.0.1'
      port : 5432,
      user : 'igmmdggx',
      password : 'A0XniyV-_90RDo5nrsClEMC2WP1PYDYs',
      database : 'igmmdggx'
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