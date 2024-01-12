const { response } = require("express");
const { products } = require("../config/db.js");

const getAllProducts = (request, response) => {
    response.json(products);
}

const addProduct = (request, response) => {
    console.log(request.body);
    const new_product = {...request.body, id: products.length + 1};
    products.push(new_product);
    response.json(products);
}

module.exports = { getAllProducts, addProduct };