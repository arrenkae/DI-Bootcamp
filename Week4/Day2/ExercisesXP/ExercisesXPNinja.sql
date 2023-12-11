SELECT firstname, lastname FROM customers ORDER BY firstname DESC
LIMIT 2;

DELETE FROM purchases WHERE customer_id = (SELECT id FROM customers WHERE firstname = 'Scott' AND lastname = 'Scott');

SELECT * FROM purchases;

SELECT * FROM purchases
RIGHT JOIN customers
ON purchases.customer_id = customers.id;

SELECT * FROM purchases
LEFT JOIN customers
ON purchases.customer_id = customers.id;