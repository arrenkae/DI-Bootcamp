# Exercise 1 : Set
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {7, 42}

my_fav_numbers.add(666)
my_fav_numbers.add(4)

print(my_fav_numbers)

my_fav_numbers.remove(4)

print(my_fav_numbers)

friend_fav_numbers = {69, 420}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)

# Exercise 2: Tuple
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
# Answer: No

# Exercise 3: List
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

print(basket)
print(basket.count("Apples"))

basket.clear()

print(basket)

# Exercise 4: Floats
# Recap – What is a float? What is the difference between an integer and a float?
# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

float_sequence = []
item = 1.0

while item < 5.0:
    item += 0.5
    float_sequence.append(item)

print(float_sequence)

# Exercise 5: For Loop
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for num in range(1, 21):
    if num % 2 == 0:
        print(num)

# Exercise 6 : While Loop
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

user_name = ''

while user_name != 'Nadia':
    user_name = input('Give me your name: ')

# Exercise 7: Favorite fruits
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

fruits = input('Give me a list of your favorite fruits (separate with space): ')
fruit_list = fruits.split()

fruit_name = input('Now choose a random fruit: ')

if fruit_name in fruit_list:
    print('You chose one of your favorite fruits! Enjoy!')
else:
    print('You chose a new fruit. I hope you enjoy')

# Exercise 8: Who ordered a pizza ?
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

toppings_list = []
price_total = 10

while True:
    toppings_input = input("What do you want to add to your pizza? (type done when you're done) ")
    if toppings_input == 'done':
        break
    else:
        toppings_list.append(toppings_input)
        price_total += 2.5

toppings = ', '.join(toppings_list)
print(f'Your toppings: {toppings}, the total price is {price_total}')

# Exercise 9: Cinemax
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Ask a family the age of each person who wants a ticket.
# Store the total cost of all the family’s tickets and print it out.

cost_total = 0

while True:
    age = input("Give me an age for the next ticket, or type done when you're done: ")
    if age == 'done':
        break
    else:
        if 3 <= int(age) <= 12:
            cost_total += 10
        elif int(age) > 12:
            cost_total += 15

print(f'The total cost of your tickets is {cost_total}')

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

name_list = ['Johnny', 'Kevin', 'Bob', 'Barbara']
final_list = []

for name in name_list:
    age = int(input(f'How old are you, {name}? '))
    if 16 <= age <= 21:
        final_list.append(i)

names = ', '.join(final_list)
print(f'{names}, you are allowed to watch the movie. Everyone else can go home')

# Exercise 10 : Sandwich Orders
# Using the list below :
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

for order in sandwich_orders[:]:
    finished_sandwiches.append(order)
    sandwich_orders.remove(order)

for sandwich in finished_sandwiches:
    print(f'I made your {sandwich.lower()}')