# Exercise 1: Birthday Look-up
# Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# Ask the user to give you a person’s name and store the answer in a variable.
# Get the birthday of the name provided by the user.
# Print out the birthday with a nicely-formatted message.

# Exercise 2: Birthdays Advanced
# Before asking the user to input a person’s name print out all of the names in the dictionary.
# If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

# Exercise 3: Add Your Own Birthday
# Instructions
# Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
# Ask the user for a person’s name – store it in a variable.
# Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
# Now add this new data into your dictionary.
# Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.

# birthdays = {
#     'Nadia': '1990/04/03',
#     'Ivan': '1984/09/24',
#     'Natalia': '1970/08/04',
#     'Oleg': '1964/04/02',
#     'Jessie': '2008/02/02'
# }

# print('Hello! You can look up the birthday of one of those people:')

# for key in birthdays:
#     print(key)

# user_name = input('But first, give me your name: ')
# user_birthday = input('And your birthday (YYYY/MM/DD): ')
# birthdays[user_name] = user_birthday

# while True:
#     name = input('Give me a name to look up a birthday: ')
#     if name in birthdays:
#         break
#     else:
#         print(f"Sorry, I don't have the birthday information for {name}")

# print(f"{name}'s birthday is on {birthdays[name]}")

# Exercise 4: Fruit Shop
# Using the dictionary below, each key-value pair represents an item and its price - print all the items and their prices in a sentence.

items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

print(', '.join(f'{item} costs ${price}' for item, price in items.items()))


# Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock -
# write some code to calculate how much it would cost to buy everything in stock.

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total = 0

for item in items:
    total += items[item]["price"] * items[item]["stock"]

print(total)