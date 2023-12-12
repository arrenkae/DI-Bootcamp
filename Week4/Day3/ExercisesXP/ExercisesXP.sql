-- Exercise 1: DVD Rental

SELECT * FROM language;

SELECT film.title, film.description, language.name AS language FROM film
INNER JOIN language
ON film.language_id = language.language_id;

SELECT language.name AS language, film.title, film.description FROM language
LEFT JOIN film
ON language.language_id = film.language_id;

CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR (255) NOT NULL
);

INSERT INTO new_film (name)
VALUES 
	('Star Wars'),
	('Avengers'),
	('Barbie'),
	('Oppenheimer');

CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY,
	newfilm_id INTEGER REFERENCES new_film(id),
	language_id INTEGER REFERENCES language(language_id),
	title VARCHAR (255),
	score SMALLINT,
	review_text VARCHAR,
	last_update TIMESTAMP DEFAULT NOW()
);

INSERT INTO customer_review (newfilm_id, language_id, title, score, review_text)
VALUES 
	(3, 1, 'Great movie!', 9, 'Almost as good as Oppenheimer'),
	(4, 6, 'Großartiger Film!', 9, 'Fast so gut wie Barbie');

DELETE FROM new_film WHERE id = 3;
-- Returns an error

-- Exercise 2 : DVD Rental

UPDATE film
SET language_id = 6 WHERE film_id = 1;

UPDATE film
SET language_id = 4 WHERE film_id = 2;

UPDATE film
SET language_id = 5 WHERE film_id = 5;

UPDATE film
SET language_id = 3 WHERE film_id = 16;

-- Q: Which foreign keys (references) are defined for the customer table?
-- How does this affect the way in which we INSERT into the customer table?
-- A: address_id in the customer table references address_id in the address table;
-- to INSERT a new customer we must use an existing address_id from the address table

DROP TABLE customer_review;
-- doesn't require extra steps

SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

SELECT title, rental_rate FROM film WHERE film_id IN (
	SELECT film_id FROM inventory WHERE inventory_id IN (
		SELECT inventory_id FROM rental WHERE return_date IS NULL
	)
)
ORDER BY rental_rate DESC
LIMIT 30;

SELECT * FROM film WHERE description LIKE '%Sumo Wrestler%' AND film_id IN (
	SELECT film_id FROM film_actor WHERE actor_id IN (
		SELECT actor_id FROM actor WHERE first_name = 'Penelope' AND last_name = 'Monroe'
	)
);

SELECT * FROM film WHERE length < 60 AND rating = 'R' AND film_id IN (
	SELECT film_id FROM film_category WHERE category_id IN (
		SELECT category_id FROM category WHERE name = 'Documentary'
	)
);

SELECT * FROM film WHERE film_id IN (
	SELECT film_id FROM inventory WHERE inventory_id IN (
		SELECT inventory_id FROM rental WHERE customer_id IN (
			SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name = 'Mahan'
		)
		AND customer_id IN (
			SELECT customer_id FROM payment WHERE amount > 4
		)
		AND return_date BETWEEN '2005-07-28' AND '2005-08-01'
	)
);

SELECT * FROM film WHERE film_id IN (
	SELECT film_id FROM inventory WHERE inventory_id IN (
		SELECT inventory_id FROM rental WHERE customer_id IN (
			SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name = 'Mahan'
		)
	)
)
AND (title LIKE '%Boat%' OR description LIKE '%Boat%')
ORDER BY replacement_cost DESC
LIMIT 1;