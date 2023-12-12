-- Part I

CREATE TABLE customer (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (255),
	last_name VARCHAR (255) NOT NULL
);

CREATE TABLE customer_profile (
	id SERIAL PRIMARY KEY,
	is_logged_in BOOLEAN DEFAULT FALSE,
	customer_id INTEGER REFERENCES customer(id)
);

INSERT INTO 
    customer (first_name, last_name)
VALUES
	('John', 'Doe'),
	('Jerome', 'Lalu'),
	('Lea', 'Rive');
	
INSERT INTO 
    customer_profile (is_logged_in, customer_id)
VALUES
	(TRUE, 1),
	(FALSE, 2);
	
SELECT customer.first_name FROM customer
INNER JOIN customer_profile
ON customer.id = customer_profile.customer_id
WHERE customer_profile.is_logged_in = TRUE;

SELECT customer.first_name, customer_profile.is_logged_in FROM customer
LEFT JOIN customer_profile
ON customer.id = customer_profile.customer_id;

SELECT COUNT(*) FROM customer
LEFT JOIN customer_profile
ON customer.id = customer_profile.customer_id
WHERE customer_profile.is_logged_in IS NOT TRUE;

-- Part II

CREATE TABLE book (
	book_id SERIAL PRIMARY KEY,
	title VARCHAR (255) NOT NULL,
	author VARCHAR (255) NOT NULL
);

INSERT INTO
	book (title, author)
VALUES
	('Alice In Wonderland', 'Lewis Carroll'),
	('Harry Potter', 'J.K Rowling'),
	('To Kill a Mockingbird', 'Harper Lee');
	
CREATE TABLE student (
	student_id SERIAL PRIMARY KEY,
	name VARCHAR (255) NOT NULL UNIQUE,
	age INTEGER
);

INSERT INTO
	student (name, age)
VALUES
	('John', 12),
	('Lera', 11),
	('Patrick', 10),
	('Bob', 14);
	
SELECT * FROM student
SELECT * FROM book
	
CREATE TABLE library (
	book_fk_id INTEGER REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_id INTEGER REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date DATE,
	PRIMARY KEY (book_fk_id, student_id)
);

INSERT INTO
	library (student_id, book_fk_id, borrowed_date)
VALUES
	(
		(SELECT student_id FROM student where name = 'John'),
		(SELECT book_id FROM book where title = 'Alice In Wonderland'),
		'2022-02-15'
	),
	(
		(SELECT student_id FROM student where name = 'Bob'),
		(SELECT book_id FROM book where title = 'To Kill a Mockingbird'),
		'2021-03-03'
	),
	(
		(SELECT student_id FROM student where name = 'Lera'),
		(SELECT book_id FROM book where title = 'Alice In Wonderland'),
		'2021-05-23'
	),
	(
		(SELECT student_id FROM student where name = 'Bob'),
		(SELECT book_id FROM book where title = 'Harry Potter'),
		'2021-08-12'
	);
	
SELECT * FROM library;

SELECT student.name, book.title
FROM student
INNER JOIN library
ON student.student_id = library.student_id
INNER JOIN book
ON library.book_fk_id = book.book_id;

SELECT AVG(student.age)
FROM student
INNER JOIN library
ON student.student_id = library.student_id
INNER JOIN book
ON library.book_fk_id = book.book_id
WHERE book.title = 'Alice In Wonderland';

DELETE FROM student WHERE student_id = 1;

SELECT * FROM library;
-- also deleted the row with student_id = 1