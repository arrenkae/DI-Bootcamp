# Exercise 3: String module

# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

import random
import string

r_string = ''.join(random.choices(string.ascii_letters, k=5))

print(r_string)
