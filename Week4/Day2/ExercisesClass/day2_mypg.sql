CREATE TABLE products (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 )  NOT NULL,
	price integer NOT NULL
);

INSERT INTO 
    products (price, name)
VALUES
    (800,'iPhone'),
	(700,'iPad'),
    (600,'iWatch'),
    (900,'iCar');
	
DROP TABLE products_desc
	
CREATE TABLE products_desc (
	id serial PRIMARY KEY,
	description VARCHAR(50),
	product_id integer NOT NULL,
	CONSTRAINT fk_product
		FOREIGN KEY (product_id)
			REFERENCES products(id)
);

SELECT * FROM products

INSERT INTO
	products_desc (description, product_id)
VALUES
	('Amazing phone', 1),
	('Best watch', 2),
	('Fantastic car', 3),
	('Great tablet', 4)

SELECT * FROM products_desc

SELECT products.id, products.name, products.price, products_desc.description FROM products
INNER JOIN products_desc
ON products.id = products_desc.product_id

SELECT products.id, products.name, products.price, products_desc.description
FROM products, products_desc
WHERE products.id = products_desc.product_id
ON products.id = products_desc.product_id

-- LEFT JOIN
-- RIGHT JOIN
-- FULL JOIN