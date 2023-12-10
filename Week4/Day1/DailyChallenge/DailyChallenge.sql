CREATE TABLE actors(
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (100) NOT NULL,
	age DATE NOT NULL,
	number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Meryl','Streep','22/06/1949', 3);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Judi','Dench','09/12/1934', 1);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Leonardo','DiCaprio','11/11/1974', 1),
('Morgan','Freeman','01/06/1937', 1),
('Dwayne','Johnson','02/05/1972', 0);

SELECT * FROM actors LIMIT 4;

SELECT * FROM actors ORDER BY last_name DESC
LIMIT 4;

SELECT * FROM actors WHERE first_name LIKE '%e%';

SELECT * FROM actors WHERE number_oscars >= 5;

UPDATE actors SET first_name='Maty' WHERE first_name='Matt' AND last_name='Damon';

UPDATE actors SET number_oscars=4 WHERE first_name='George' AND last_name='Clooney';

SELECT * FROM actors;

SELECT COUNT(actor_id)
FROM actors;

-- INSERT INTO actors (first_name)
-- VALUES('Bob')
-- returns an error because of not-null constraint

