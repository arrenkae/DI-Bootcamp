CREATE TABLE menu_items (
	item_id SERIAL PRIMARY KEY,
	item_name VARCHAR (30) UNIQUE NOT NULL,
	item_price SMALLINT DEFAULT 0
)

INSERT INTO menu_items (item_name, item_price)
VALUES
	('Soup', 30),
	('Hamburger', 45),
	('Fries', 22),
	('Stew', 52)