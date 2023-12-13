# Exercise 1 : Restaurant Menu Manager

# Description: Create a restaurant menu management system for a manager. The program should allow the manager to view the menu, add an item and delete an item.

# PART 1

#  4. In the file menu_manager.py, create a new class called MenuManager
#     1. Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.
#     2. Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.


import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

class MenuManager:

    def __init__(self):
        pass

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
        items = cur.fetchall()
        if items: 
            result = items
        else:
            result = None
        cur.close()
        conn.close()
        return result

    def get_by_name(self, item_name):
        return self.db_connect(f"SELECT * FROM menu_items where item_name = '{item_name}'")

    def all_items(self):
        return self.db_connect("SELECT * FROM menu_items")

# mymenu = MenuManager()

# print(mymenu.get_by_name('Ramen'))
# items = mymenu.all_items()

