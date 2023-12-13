# Exercise 1 : Restaurant Menu Manager

# Description: Create a restaurant menu management system for a manager. The program should allow the manager to view the menu, add an item and delete an item.

# PART 1

# In this exercise we will use PostgreSQL and Python.

# 1. Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns
#   - item_id : SERIAL PRIMARY KEY
#   - item_name : VARCHAR(30) NOT NULL
#   - item_price : SMALLINT DEFAULT 0

# 2. In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.

# 3. Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.

import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

class MenuItem:

    def __init__(self, item_name, item_price=0):
        self.name = item_name
        self.price = item_price

    def db_connect(self, query): 
        conn = psycopg2.connect(
            dbname=os.getenv('db_name'),
            user=os.getenv('db_user'),
            password=os.getenv('db_password'),
            host=os.getenv('db_host'),
            port=os.getenv('db_port')
        )
        cur = conn.cursor()
        cur.execute(query)
        conn.commit()
        cur.close()
        conn.close()

    def save(self):
        self.db_connect(f"INSERT INTO menu_items (item_name, item_price) VALUES ('{self.name}', {self.price})")

    def delete(self):
        self.db_connect(f"INSERT INTO menu_items (item_name, item_price) VALUES ('{self.name}', {self.price})")

    def delete(self):
        self.db_connect(f"DELETE FROM menu_items WHERE item_name = '{self.name}'")

    def update(self, new_name, new_price):
        self.db_connect(f"UPDATE menu_items SET item_name='{new_name}', item_price={new_price} WHERE item_name = '{self.name}'")

# ramen = MenuItem('Ramen', 30)

# ramen.save()
# ramen.delete()
# ramen.update('Beef ramen', 35)