# Part 2

# 1. Create a file called menu_editor.py , which will have the following functions:
#    1. show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
#      - View an Item (V)
#      - Add an Item (A)
#      - Delete an Item (D)
#      - Update an Item (U)
#      - Show the Menu (S)
#      - Call the appropriate function that matches the user’s input.

#    2. add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#       - If the item was added successfully print a message which states: item was added successfully.

#    3. remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#       - If the item was deleted successfully – print a message to let the user know this was completed.
#       - If not – print a message which states that there was an error.

#    4. update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#       - If the item was updated successfully – print a message to let the user know this was completed.
#       - If not – print a message which states that there was an error.

#    5. show_restaurant_menu() - print the restaurant’s menu.

# 2. When the user chooses to exit the program, display the restaurant menu and exit the program.

import psycopg2
import os
from dotenv import load_dotenv
from menu_item import MenuItem
from menu_manager import MenuManager

load_dotenv()

class MenuEditor:

    def __init__(self):
        self.manager = MenuManager()

    def show_user_menu(self):
        while True:
            user_input = input('''
View an Item (V)
Add an Item (A)
Delete an Item (D)
Update an Item (U)
Show the Menu (S)
Exit (E)
''')
            if user_input.lower() == 'v':
                print(self.view_item())
            elif user_input.lower() == 'a':
                print(self.add_item())
            elif user_input.lower() == 'd':
                print(self.delete_item())
            elif user_input.lower() == 'u':
                print(self.update_item())
            elif user_input.lower() == 's':
                print(self.restaurant_menu())
            elif user_input.lower() == 'e':
                print(self.restaurant_menu())
                break
            else:
                print('Choose a valid option')

    def view_item(self):
        item_name = input('Item name: ').capitalize()
        item = self.manager.get_by_name(item_name)
        if item:
            return f'{item[0][1]}: ${item[0][2]}'
        else:
            return f'{item_name} not in the menu'

    def add_item(self):
        item_name = input('Item name: ').capitalize()
        if not self.manager.get_by_name(item_name):
            item_price = int(input('Item price: '))
            new_item = MenuItem(item_name, item_price)
            try:
                new_item.save()
            except:
                print(f'Couldn\'t add {item_name}')
            else:
                print(f'{item_name} successfully added!')
        else:
            return f'{item_name} is already in the menu!'

    def delete_item(self):
        item_name = input('Item name: ').capitalize()
        if self.manager.get_by_name(item_name):
            item_to_delete = MenuItem(item_name)
            try:
                item_to_delete.delete()
            except:
                print(f'Couldn\'t delete {item_name}')
            else:
                print(f'{item_name} successfully deleted!')
        else:
            return f'{item_name} not in the menu'

    def update_item(self):
        item_name = input('Item name: ').capitalize()
        if self.manager.get_by_name(item_name):
            new_name = input('New name: ').capitalize()
            new_price = int(input('New price: '))
            item_to_update = MenuItem(item_name)
            try:
                item_to_update.update(new_name, new_price)
            except:
                print(f'Couldn\'t update {item_name}')
            else:
                print(f'{item_name} successfully updated!')
        else:
            return f'{item_name} not in the menu'

    def restaurant_menu(self):
        items = self.manager.all_items()
        menu = ''
        if items:
            for item in items:
                menu += f'{item[1]}: ${item[2]}\n'
            return menu
        else:
            return 'No items in the menu'
    
editor = MenuEditor()
editor.show_user_menu()