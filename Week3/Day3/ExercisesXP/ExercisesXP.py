# Exercise 1: Currencies

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE


#     Using the code above, implement the relevant methods and dunder methods which will output the results below.
#     Hint : When adding 2 currencies which don’t share the same label you should raise an error.

# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 12 currencies which don’t share the same label you should raise an error.

# >>> c1 = Currency(' : When adding 2 currencies which don’t share the same label you should raise an error.

# >>> c1 = Currency('dollar', 5)
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel'
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel'
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 12 currencies which don’t share the same label you should raise an error.

# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'p

# >>> str(c1)
# '5 dollars'z2 currencies which don’t share the same label you should raise an error.

# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'p

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

class Currency:

    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f'{self.amount} {self.currency}s'

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f'{self.amount} {self.currency}s'

    def __add__(self, other):
        try:
            if self.currency != other.currency:
                raise Exception(f'Cannot add between Currency type {self.currency} and {other.currency}')
        except AttributeError:
            pass
        return self.amount + int(other)

    def __iadd__(self, other):
        try:
            if self.currency != other.currency:
                raise Exception(f'Cannot add between Currency type {self.currency} and {other.currency}')
        except AttributeError:
            pass
        self.amount += int(other)
        return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))

print(int(c1))

print(repr(c1))

print(c1 + c2)

print(c1 + 5)

print(c1)

c1 += 5

print(c1)

c1 += c2

print(c1)

print(c1+c3)

# Exercise 2: Import

# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function

from func import func as fn

fn(6, 5)

# Exercise 3: String module

# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

import random
import string

r_string = ''.join(random.choices(string.ascii_letters, k=5))

print(r_string)

# Exercise 4 : Current Date

# Create a function that displays the current date.
# Hint : Use the datetime module.

import datetime

date_current = datetime.date.today()

print(date_current)

# Exercise 5 : Amount of time left until January 1st

# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

def countdown():
    
    time_left = datetime.datetime(2024, 1, 1) - datetime.datetime.now()
    hours_left = time_left.seconds//3600
    minutes_left = (time_left.seconds - hours_left*3600)//60
    seconds_left = time_left.seconds - hours_left*3600 - minutes_left*60
    print(f'the 1st of January is in {time_left.days} days and {hours_left}:{minutes_left}:{seconds_left} hours')

countdown()

# Exercise 6 : Birthday and minutes

# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

def minutes_lived(birthdate):
    lived = datetime.datetime.now() - datetime.datetime.strptime(birthdate, '%d/%m/%Y')
    print(f'You have lived {int(lived.total_seconds() // 60)} minutes')

minutes_lived('04/03/1990')

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