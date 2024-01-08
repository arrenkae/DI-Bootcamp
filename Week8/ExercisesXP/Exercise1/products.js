// Exercise 1: Multiple Exports and Import using CommonJS syntax (pt.1)

// 1. Create a file named products.js.
// 2. Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.
// 3. Export this array using the Common JS syntax.

const products = [
    {
        name: 'tv',
        price: 1500,
        category: 'electronics'
    },
    {
        name: 'laptop',
        price: 2000,
        category: 'electronics'
    },
    {
        name: 'smartphone',
        price: 1000,
        category: 'electronics'
    },
    {
        name: 'banana',
        price: 10,
        category: 'food'
    },
    {
        name: 'cheese',
        price: 20,
        category: 'food'
    },
    {
        name: 'steak',
        price: 50,
        category: 'food'
    }
]

module.exports = products;