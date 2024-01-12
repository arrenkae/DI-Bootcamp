const express = require('express');
const { getAllProducts, addProduct } = require("../controllers/products.controller.js");

const products_router = express.Router();

products_router.get('/', getAllProducts);
products_router.post('/', addProduct);

module.exports = { products_router };