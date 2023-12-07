# Exercise 3 : Regular Expression

# Use the regular expression module to extract numbers from a string.

import re

def extract_numbers(user_string):
    print(''.join(re.findall('\d+', user_string)))

extract_numbers('k5k3q2g5z6x9bn') 