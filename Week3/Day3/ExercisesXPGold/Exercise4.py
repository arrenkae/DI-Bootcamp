# Exercise 4 : Regular Expression #2

#     Ask the user for their full name (example: “John Doe”), and check the validity of their answer:
#         The name should contain only letters.
#         The name should contain only one space.
#         The first letter of each name should be upper cased.

import re

user_name = input('What is your name? ')

if re.fullmatch('^[A-Z][A-Za-z]+\s[A-Z][A-Za-z]+', user_name):
    print('Valid name')
else:
    print('Invalid name')