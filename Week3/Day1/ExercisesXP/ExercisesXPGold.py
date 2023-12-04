# import math
# import random

# # Exercise 1 : Geometry
# # Write a class called Circle that receives a radius as an argument (default is 1.0).
# # Write two instance methods to compute perimeter and area.
# # Write a method that prints the geometrical definition of a circle.

# class Circle:

#     def __init__(self, radius=1.0):
#         self.radius = radius

#     def circle_perimeter(self):
#         perimeter = 2 * math.pi * self.radius
#         return perimeter

#     def circle_area(self):
#         area = (math.pi * self.radius) ** 2
#         return area

# my_circle = Circle(2.5)

# print(my_circle.circle_perimeter())
# print(my_circle.circle_area())

# # Exercise 2 : Custom List Class
# # Create a class called MyList, the class should receive a list of letters.
# # Add a method that returns the reversed list.
# # Add a method that returns the sorted list.
# # Bonus : Create a method that generates a second list with the same length as mylist. The list should be constructed with random numbers. (use list comprehension).

# class MyList:

#     def __init__(self, letters:list):
#         self.letters = letters

#     def reverse_list(self):
#         new_list = []
#         for letter in self.letters[::-1]:
#             new_list.append(letter)
#         return new_list
    
#     def sort_list(self):
#         new_list = self.letters
#         for i in range(len(new_list)):
#             for j in range(i+1, len(new_list)):
#                 if new_list[i] > new_list[j]:
#                     new_list[i], new_list[j] = new_list[j], new_list[i]
#         return new_list

#     def random_numbers(self):
#         new_list = [random.randint(1,100) for x in range(len(self.letters))]
#         return new_list

# letters = MyList(['l', 'e', 't', 't', 'e', 'r', 's'])

# print(letters.reverse_list())
# print(letters.sort_list())
# print(letters.random_numbers())

# Exercise 3 : Restaurant Menu Manager
# The purpose of this exercise is to create a restaurant menu. The code will allow a manager to add and delete dishes.
# Create a python file called menu_manager.py.
# Create a class called MenuManager.
# Create a method __init__ that instantiates an attribute called menu. The menu attributes value will be all the current dishes (list of dictionaries). Each dish will be stored in a dictionary where the keys are name, price, spice level and gluten index (which value is a boolean).

# Here is a list of the dishes currently on the menu:
# Soup – 10 – B - False
# Hamburger – 15 - A - True
# Salad – 18 - A - False
# French Fries – 5 - C - False
# Beef bourguignon– 25 - B - True
# Meaning: For the spice level:
# • A = not spicy,
# • B = a little spicy,
# • C = very spicy

# The dishes provided above should be the value of the menu attribute.
# Create a method called add_item(name, price, spice, gluten). This method will add new dishes to the menu.
# reate a method called update_item(name, price, spice, gluten). This method checks whether a dish is in the menu, if the dish exists then update it. If not notify the manager that the dish is not in the menu.
# Create a method called remove_item(name). This method should check if the dish is in the menu, if the dish exists then delete it and print the updated dictionary. If not notify the manager that the dish is not in the menu.

class MenuManager:

    def __init__(self, *dishes)
