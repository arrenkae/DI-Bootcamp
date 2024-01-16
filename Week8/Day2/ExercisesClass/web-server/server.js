/** API Restful API */
/** CRUD */

const express = require('express');
const bp = require('body-parser');
const { users_router } = require('./routes/users.routes.js')
const { products_router } = require('./routes/products.routes.js')
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

// app.use(logger);
// app.use('/users', auth);

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on port ${process.env.PORT || 3001}`);
});

app.use('/', express.static(__dirname + '/public'));

app.use('/users', users_router);
app.use('/products', products_router);

/*
app.get
app.post
app.put
app.delete
*/
/** CRUD
 * C - Create - POST
 * R - Read - GET
 * U - Update - PUT
 * D - Delete - DELETE
*/

/**
 * server
 * |_ config - connection to databases
 * |_ models * - queries to database
 * |_ controllers - function implementation code
 * |_ routes - route implementation codes
 */

/** Middleware: request => middleware => response */

/** .env */