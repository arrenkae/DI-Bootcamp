SELECT * FROM products

-- UPDATE products SET name = 'iPhone7', description = '12345' WHERE id = 1

-- DELETE FROM products WHERE id = 3

-- UPDATE products SET name = 'iPhone', description = '12345'
-- WHERE id = 3

-- SELECT * FROM products WHERE name like 'iP%' ORDER BY price

-- SELECT * FROM products WHERE price between 500 and 1000 ORDER BY name desc

-- SELECT * FROM products WHERE name in ('iPad', 'iCar')

-- SELECT * FROM products WHERE price > 600 ORDER BY name desc

-- SELECT * FROM products WHERE id = 1

-- SELECT name || ' ' || description as namedesc FROM products

-- SELECT name, description, price FROM products

-- SELECT * FROM products [never actually use]

-- INSERT INTO products (description, name, price)
-- VALUES ('bla bla bla', 'iPad14', 900),
-- ('nvmvndhhdf', 'iWatch', 600),
-- ('djfkhdsh', 'iCard', 10000)

-- CREATE TABLE products (
-- 	id serial PRIMARY KEY,
-- 	name varchar(255) NOT NULL,
-- 	price integer NOT NULL,
-- 	description varchar(1000)
-- )

-- CREATE TABLE accounts (
-- 	user_id serial PRIMARY KEY,
-- 	username varchar(50) UNIQUE NOT NULL,
-- 	password varchar(50) NOT NULL,
-- 	email varchar(255) UNIQUE NOT NULL,
-- 	created_on timestamp NOT NULL default now(),
-- 	last_login timestamp 
-- ) 

-- CREATE TABLE myuserstable (
-- 	id serial PRIMARY KEY,
-- 	email varchar(255) UNIQUE NOT NULL,
-- 	password varchar(1000),
-- 	created_date timestamp default now()
-- )
-- UNIQUE
-- NOT NULL
-- PRIMARY KEY
-- FOREIGN KEY