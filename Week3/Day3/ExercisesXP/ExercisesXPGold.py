# Exercise 1 : Upcoming Holiday

# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
#  Hint: Start by hardcoding the datetime and name of the upcoming holiday.

import datetime

def until_holiday(holiday_name, holiday_date):
    date_md = datetime.datetime.strptime(holiday_date, '%d/%m')
    if date_md.month == datetime.datetime.now().month and date_md.day == datetime.datetime.now().day:
        return print(f'{holiday_name} is today!')
    elif date_md.month >= datetime.datetime.now().month and date_md.day > datetime.datetime.now().day:
        date_full = date_md.replace(year=datetime.datetime.now().year)
    else:
        date_full = date_md.replace(year=datetime.datetime.now().year + 1)
    time_left = date_full - datetime.datetime.now()
    hours_left = time_left.seconds//3600
    minutes_left = (time_left.seconds - hours_left*3600)//60
    seconds_left = time_left.seconds - hours_left*3600 - minutes_left*60
    print(f'The next {holiday_name} is in {time_left.days} days and {hours_left}:{minutes_left}:{seconds_left} hours')

until_holiday('Hanukkah', '07/12')
until_holiday('New Year', '01/01')

# How Old Are You On Jupiter?

# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years

# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.

def age_seconds(birthdate):
    lived = datetime.datetime.now() - datetime.datetime.strptime(birthdate, '%d/%m/%Y')
    return int(lived.total_seconds())

my_seconds_age = age_seconds('04/03/1990')

planets = {'Mercury': 0.2408467, 'Venus': 0.61519726, 'Mars':1.8808158, 'Jupiter':11.862615, 'Saturn':29.447498, 'Uranus':84.016846, 'Neptun':164.79132}

def space_age(seconds, planet): 
    if planet not in planets:
        raise Exception(f'No data on {planet}')
    else:
        earth_age = seconds / 31557600
        planet_age = earth_age / planets[planet]
    return f'On {planet} you would be {planet_age} years old.'

print(space_age(my_seconds_age, 'Venus'))
print(space_age(my_seconds_age, 'Mars'))
print(space_age(my_seconds_age, 'Uranus'))
    
# Exercise 3 : Regular Expression

# Use the regular expression module to extract numbers from a string.

import re

def extract_numbers(user_string):
    print(''.join(re.findall('\d+', user_string)))

extract_numbers('k5k3q2g5z6x9bn') 

# Exercise 4 : Regular Expression #2

#     Ask the user for their full name (example: “John Doe”), and check the validity of their answer:
#         The name should contain only letters.
#         The name should contain only one space.
#         The first letter of each name should be upper cased.


user_name = input('What is your name? ')

if re.fullmatch('^[A-Z][A-Za-z]+\s[A-Z][A-Za-z]+', user_name):
    print('Valid name')
else:
    print('Invalid name')

# Exercise 5: Python Password Generator

# Create a Python program that will generate a good password for you.

# Program flow:

#     Ask the user to type in the number of characters that the password should have (password length) – between 6 and 30 characters.
#         Validate the input. Make sure the user is inputing a number between 6 to 30. Create a loop which will continue to ask the user for an input until they enter a valid one.

#     Generate a password with the required length.

#     Print the password with a user-friendly message which reminds the user to keep the password in a safe place!

# Rules for the validity of the password

#     Each password should contain:
#         At least 1 digit (0-9)
#         At least 1 lower-case character (a-z)
#         At least 1 upper-case character (A-Z)
#         At least 1 special character (eg. !, @, #, $, %, ^, _, …)
#         Once there is at least 1 of each, the rest of the password should be composed of more characters from the options presented above.

#     Create a test function first!

#     Do the following steps 100 times, with different password lengths:
#         Generate a password.
#         Test the password to ensure that:
#             it fulfills all the requirements above (eg. it has at least one digit, etc.)
#             it has the specified length.

import random

letters_lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
letters_upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']
all_chars = letters_lower + letters_upper + numbers + symbols

def password_query():
    while True:
        password_len = int(input('Password length (6-30 characters): '))
        if password_len in range(6, 31):
            break
        else:
            print('Password should be 6-30 characters long')
    return generate_password(password_len)

def generate_password(password_len):
    while True:
        password = ''
        has_upper = False
        has_numbers = False
        has_symbols = False
        for i in range(password_len):
            password += random.choice(all_chars)
            if password[-1] in letters_upper:
                has_upper = True
            if password[-1] in numbers:
                has_numbers = True
            if password[-1] in symbols:
                has_symbols = True
        if has_upper == has_numbers == has_symbols == True:
            break
    return password

print(password_query())

for i in range(1, 101):
    x = random.randint(6,30)
    print(f'Password #{i}: {generate_password(x)} ({x} characters)')
