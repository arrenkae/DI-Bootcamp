-- Exercise 1 : Items and customers

SELECT * FROM items ORDER BY price;

SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;

SELECT firstname, lastname FROM customers 
LIMIT 3;

SELECT lastname FROM customers ORDER BY lastname DESC;

-- Exercise 2 : dvdrental database

SELECT * FROM customer;

SELECT first_name || ' ' || last_name AS full_name FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate;

SELECT address, phone FROM address WHERE district = 'Texas';

SELECT * FROM film WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Star Wars';

SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'St%';

SELECT * FROM film ORDER BY rental_rate
FETCH FIRST 10 ROWS ONLY;

SELECT * FROM film ORDER BY rental_rate
OFFSET 10 ROWS
FETCH NEXT 10 ROWS ONLY;

SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;

SELECT film_id, title FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory);

SELECT city.city, country.country FROM city
INNER JOIN country
ON city.country_id = country.country_id;

SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id;