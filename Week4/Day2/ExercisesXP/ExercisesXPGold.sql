-- Exercise 1: DVD Rental

SELECT COUNT(*) FROM film WHERE rating = 'G';
SELECT COUNT(*) FROM film WHERE rating = 'PG';
SELECT COUNT(*) FROM film WHERE rating = 'PG-13';
SELECT COUNT(*) FROM film WHERE rating = 'NC-17';
SELECT COUNT(*) FROM film WHERE rating = 'R';

SELECT * FROM film WHERE rating IN ('G', 'PG-13')
AND length < 120
AND rental_rate < 3.00
ORDER BY title;

UPDATE customer
SET first_name = 'Nadezhda', last_name = 'Sventsitsky', email='stokely@slayers.ru', last_update = CURRENT_TIMESTAMP
WHERE customer_id = 524;

UPDATE address
SET address = '42 Ben Gurion', district = 'Gush Dan', city_id = 533, postal_code = 424242, phone = 9725555555, last_update = CURRENT_TIMESTAMP
WHERE address_id = (
	SELECT address_id FROM customer WHERE customer_id = 524
);

-- Exercise 2: students table

UPDATE students
SET birth_date = '1998-11-02'
WHERE last_name = 'Benichou';

UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David';

DELETE FROM students WHERE first_name = 'Lea' AND last_name = 'Benichou';

SELECT COUNT(*) FROM students;

SELECT COUNT(*) FROM students WHERE birth_date > '2000-01-01';

ALTER TABLE students
ADD math_grade integer;

UPDATE students
SET math_grade = 80
WHERE id = 1;

UPDATE students
SET math_grade = 90
WHERE id = 2 OR id = 4;

UPDATE students
SET math_grade = 40
WHERE id = 6;

SELECT COUNT(*) FROM students WHERE math_grade > 83;

INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '1998-11-02', 70);

SELECT COUNT(math_grade) AS total_grade, first_name, last_name
FROM students
GROUP BY first_name, last_name;

SELECT SUM(math_grade) FROM students;

-- Exercise 3 : Items and customers

CREATE TABLE purchases (
	id SERIAL PRIMARY KEY,
	customer_id INTEGER,
	item_id INTEGER,
	quantity_purchased INTEGER,
	CONSTRAINT fk_customer
		FOREIGN KEY (customer_id) REFERENCES customers(id),
	CONSTRAINT fk_item
		FOREIGN KEY (item_id) REFERENCES items(id)
);

;

INSERT INTO
	purchases (customer_id, item_id, quantity_purchased)
VALUES
	((SELECT id FROM customers where firstname = 'Scott' and lastname = 'Scott'), 
	 (SELECT id FROM items where name = 'Fan'),
	 1),
	((SELECT id FROM customers where firstname = 'Melanie' and lastname = 'Johnson'), 
	 (SELECT id FROM items where name = 'Large Desk'),
	 10),
	((SELECT id FROM customers where firstname = 'Greg' and lastname = 'Jones'), 
	 (SELECT id FROM items where name = 'Small Desk'),
	 2);

SELECT * FROM purchases;

SELECT * FROM purchases
INNER JOIN customers
ON customer_id = customers.id;

SELECT * FROM purchases
INNER JOIN customers
ON customer_id = customers.id
WHERE customers.id = 5;

SELECT * FROM purchases
INNER JOIN customers
ON customer_id = customers.id
WHERE purchases.item_id IN ((SELECT id FROM items where name = 'Large Desk'), (SELECT id FROM items where name = 'Small Desk'));

INSERT INTO
	purchases (customer_id, quantity_purchased)
VALUES
	((SELECT id FROM customers where firstname = 'Greg' and lastname = 'Jones'),
	 1);