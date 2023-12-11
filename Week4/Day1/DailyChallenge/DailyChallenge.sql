CREATE TABLE actors(
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (100) NOT NULL,
	age DATE NOT NULL,
	number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','1970-10-08', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','1961-05-06', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Meryl','Streep','1949-06-22', 3);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Judi','Dench','1934-12-09', 1);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Leonardo','DiCaprio','1974-11-11', 1),
('Morgan','Freeman','1937-06-01', 1),
('Dwayne','Johnson','1972-05-02', 0);

SELECT * FROM actors LIMIT 4;

SELECT * FROM actors ORDER BY last_name DESC
LIMIT 4;

SELECT * FROM actors WHERE first_name LIKE '%e%';

SELECT * FROM actors WHERE number_oscars >= 5;

UPDATE actors SET first_name='Maty' WHERE first_name='Matt' AND last_name='Damon';

UPDATE actors SET number_oscars=4 WHERE first_name='George' AND last_name='Clooney';

SELECT * FROM actors ORDER BY actor_id;

SELECT COUNT(actor_id)
FROM actors;

-- INSERT INTO actors (first_name)
-- VALUES('Bob')
-- returns an error because of not-null constraint

