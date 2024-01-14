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


// console.log('db=>', db);

// db.select('id', 'name', 'email', 'password')
// .from('users')
// .then(rows => {
//     console.log(rows);
// })
// .catch(err => {
//     console.log(err);
// })

// db('users').select('id', 'name', 'email', 'password')
// .then(rows => {
//     console.log(rows);
// })
// .catch(err => {
//     console.log(err);
// })

// db.raw('select * from users')
// .then(data => {
//     console.log(data.rows);
// })
// .catch(err => {
//     console.log(err);
// })

// db('users')
// .insert({name:'Dan', email:'ddd@gmail.com', password:'duhewhohqo'})
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

// db('users')
// .update({name:'Daniel'})
// .where({id:4})
// .returning('*')
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

db('users')
.where({id:4})
.del()
.returning('*')
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})