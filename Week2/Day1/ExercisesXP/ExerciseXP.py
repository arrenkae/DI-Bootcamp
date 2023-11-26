# Exercise 1 : Hello World
# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world

print('Hello world\n'*4)

# Exercise 2 : Some Math
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

print(99**3*8)

# Exercise 3 : What is the output?
# Predict the output of the following code snippets:

# >>> 5 < 3
# False

# >>> 3 == 3
# True

# >>> 3 == "3"
# False

# >>> "3" > 3
# False

# >>> "Hello" == "hello"
# False

# Exercise 4 : Your computer brand
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = 'HP'

print(f'I have a {computer_brand} computer')

# Exercise 5 : Your information
# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

name = 'Nadia'
age = 33
shoe_size = 38
info = f'My name is {name}, I am {age} years old and I need to buy some {shoe_size} size shoes'

print(info)

# Exercise 6 : A & B
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

a = 5
b = 3

if a > b:
    print('Hello World')

# Exercise 7 : Odd or Even
# Write code that asks the user for a number and determines whether this number is odd or even.

num = int(input('Give me a number: '))

if num % 2 == 0:
    print('Your number is even')
else:
    print('Your number is odd')

# Exercise 8 : What’s your name ?
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

name = input('Give me your name: ')

if name.lower() == 'nadia' or name.lower() == 'nadezhda':
    print('What a coincidence! We have the same name :)')
else:
    print(f'Nice to meet you, {name}')

# Exercise 9 : Tall enough to ride a roller coaster
# Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

height = int(input('Give me your height (in inches): '))

if height * 2.54 > 145:
    print('You are tall enough to ride')
else:
    print('You need to grow some more before you ride')