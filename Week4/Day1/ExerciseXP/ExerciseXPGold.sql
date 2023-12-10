SELECT * FROM students WHERE id BETWEEN 1 AND 4 ORDER BY last_name

SELECT * FROM students WHERE birth_date = (SELECT MIN(birth_date) FROM students)

SELECT * FROM students WHERE id > 2
LIMIT 3