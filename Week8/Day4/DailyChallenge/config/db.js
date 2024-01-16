import knex from 'knex';

export const db = knex({
    client: 'postgres',
    connection: {
      host : 'cornelius.db.elephantsql.com',
      port : 5432,
      user : 'igmmdggx',
      password : 'A0XniyV-_90RDo5nrsClEMC2WP1PYDYs',
      database : 'igmmdggx'
    }
});