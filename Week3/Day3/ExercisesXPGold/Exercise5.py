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