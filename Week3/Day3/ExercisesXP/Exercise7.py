# Faker Module

# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker

users = []

def add_fake_users(users_list, amount):
    for i in range(amount):
        user_data = {}
        user = Faker()
        users.append({'name': user.name(), 'address': user.address(), 'language code': user.language_code()})

add_fake_users(users, 3)
print(users)