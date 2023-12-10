CREATE TABLE students (
	id serial PRIMARY KEY,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	birth_date date NOT NULL
);

SET datestyle TO 'European';

INSERT INTO students (first_name, last_name, birth_date )
VALUES ('Marc', 'Benichou', '02/11/1998'),
('Yoan', 'Cohen', '03/12/2010'),
('Lea', 'Benichou', '27/07/1987'),
('Amelia', 'Dux', '07/04/1996'),
('David', 'Grez', '14/06/2003'),
('Omer', 'Simpson', '03/10/1980');

SELECT * FROM students;

SELECT first_name, last_name FROM students;

SELECT * FROM students WHERE id = 2;

SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

SELECT * FROM students WHERE first_name like '%a%';

SELECT * FROM students WHERE first_name like 'A%';

SELECT * FROM students WHERE first_name like '%a';

SELECT * FROM students WHERE first_name like '%a_';

SELECT * FROM students WHERE id in (2, 3);

SELECT * FROM students WHERE birth_date >= '01/01/2001';
