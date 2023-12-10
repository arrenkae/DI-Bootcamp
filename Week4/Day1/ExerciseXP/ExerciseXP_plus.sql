CREATE TABLE students (
	id serial PRIMARY KEY,
	last_name varchar(255) NOT NULL,
	first_name varchar(255) NOT NULL,
	birth_date date NOT NULL
)

INSERT INTO students (first_name, last_name, birth_date )
VALUES ('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03')

SELECT * FROM students

SELECT first_name, last_name FROM students

SELECT * FROM students WHERE id = 2

SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'

SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'

SELECT * FROM students WHERE first_name like '%a%'

SELECT * FROM students WHERE first_name like 'A%'

SELECT * FROM students WHERE first_name like '%a'

SELECT * FROM students WHERE first_name like '%a_'

SELECT * FROM students WHERE id in (2, 3)

SELECT * FROM students WHERE birth_date >= '2000-01-01'