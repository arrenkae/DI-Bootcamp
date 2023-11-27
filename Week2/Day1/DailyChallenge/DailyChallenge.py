# Daily challenge: Build up a string

# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld

# Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
# Hlrolelwod

import random

user_str = input("Give me a 10 character string: ")
new_str = ''

if len(user_str) < 10:
    print('String not long enough')
elif len(user_str) > 10:
    print('String too long')
else:
    print('Perfect string')
    print(f'First character: {user_str[0]}, last character: {user_str[-1]}')
    for x in user_str:
        new_str += x
        print(new_str)
    l = list(user_str)
    random.shuffle(l)
    random_str = ''.join(l)
    print(random_str)