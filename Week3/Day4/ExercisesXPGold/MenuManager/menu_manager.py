import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

class MenuManager:

    def __init__(self, menu_file):
        self.menu_file = menu_file
        with open(f'{dir_path}/{self.menu_file}', 'r') as file_obj:
            self._menu = json.load(file_obj)['items']

    def show_menu(self):
        for item in self._menu:
            print(f'{item["name"]}: {item["price"]}')

    def add_item(self, name, price):
        self._menu.append({'name':name, 'price':price})

    def remove_item(self, name):
        for item in self._menu[::]:
            if item['name'] == name:
                self._menu.remove(item)

    def save_to_file(self):
        with open(f'{dir_path}/{self.menu_file}', 'w') as file_obj:
            json.dump(self._menu, file_obj)

testmenu = MenuManager('restaurant_menu.json')

testmenu.add_item('Ramen',20)
testmenu.remove_item('Artichoke')

testmenu.show_menu()

testmenu.save_to_file()