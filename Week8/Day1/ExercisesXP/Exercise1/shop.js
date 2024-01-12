// Exercise 1: Multiple Exports and Import using CommonJS syntax (pt.2)

// 4. Create another file named shop.js.
// 5. In shop.js, require the product objects from the products.js module.
// 6. Create a function that takes a product name as a parameter and searches for the corresponding product object.
// 7. Call this function with different product names and print the details of the products.
// 8. Run shop.js and verify that the correct product details are displayed.

const products = require('./products.js');

const productSearch = (search) => {
    for (let product of products) {
        if (product.name == search) {
            return `${product.name} is found in ${product.category} and costs $${product.price}`
        };
    }
    return (`${search} not found`);
}

console.log(productSearch('laptop'));
console.log(productSearch('iPhone'));
console.log(productSearch('lobster'));
console.log(productSearch('banana'));