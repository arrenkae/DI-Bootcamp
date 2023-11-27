# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.

# number = int(input('Give me a number: '))
# length = int(input('Give me a length: '))

# multiples_list = []
# count = 1

# while count <= length:
#     multiples_list.append(number * count)
#     count += 1

# print(multiples_list)

# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

user_string = input('Give me a string: ')
dedup = user_string[0]
i = 1

while i < len(user_string):
    if user_string[i] != user_string[i-1]:
        dedup += user_string[i]
    i += 1

print(dedup)