-- functions

-- create [or replace] function function_name(param_list)
-- 	returns return_type
-- 	language plpgsql
-- as 
-- $$ 
-- declare
-- 	-- var names
-- begin
-- 	-- code / logic
-- end
-- $$

CREATE FUNCTION get_film_count(len_from INT, len_to INT)
	RETURNS INT
	LANGUAGE plpgsql
AS
$$
DECLARE
	film_count INT;
BEGIN
	SELECT COUNT (1) INTO film_count
	FROM film
	WHERE LENGTH BETWEEN len_from AND len_to;
	RETURN film_count;
END;
$$

SELECT get_film_count(30,80)

CREATE OR REPLACE FUNCTION get_customer_fullname(c_id INT, OUT fullname VARCHAR)
	RETURNS VARCHAR
	LANGUAGE plpgsql
AS
$$
-- DECLARE
-- 	c_name VARCHAR;
BEGIN
	SELECT first_name || ' ' || last_name INTO fullname FROM customer WHERE customer_id = c_id;
-- 	RETURN c_name;
END;
$$

SELECT get_customer_fullname(22)