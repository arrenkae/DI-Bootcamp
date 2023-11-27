# Exercise 1: Concatenate lists
# Write code that concatenates two lists together without using the + sign.

list1 = ['apples', 'oranges', 'pears']
list2 = ['kiwi', 'mango', 'bananas']

list1.extend(list2)

print(list1)

# Exercise 2: Range of numbers
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

for i in range(1500, 2501):
    if i % 5 == 0 or i % 7 == 0:
        print(i)

# Exercise 3: Check the index
# Using this variable
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input('What is your name? ')

if user_name in names:
    print(names.index(user_name))

# Exercise 4: Greatest Number
# Ask the user for 3 numbers and print the greatest number.

numbers = input('Give me 3 numbers: ')
numbers_list = [int(i) for i in numbers.split()]

numbers_list.sort()
print(numbers_list[-1])

# Exercise 5: The Alphabet
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

alphabet = 'abcdefghijklmnopqrstuvwxyz'
vowels = ['a', 'e', 'i', 'o', 'u']

for letter in alphabet:
    if letter in vowels:
        print(f'{letter} is a vowel')
    else:
        print(f'{letter} is a consonant')

# Exercise 6: Words and letters
# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

words = input('Give me 7 words: ')
words_list = words.split()

letter = input('Now give me a letter: ')

for word in words_list:
    if letter in word:
        print(f'The letter {letter} is in the word {word} at index {word.index(letter)}')
    else:
        print(f'The letter {letter} is not in the word {word}')

# Exercise 7:
# Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.

million_list = [i for i in range(1, 1000001)]

million_list[0] = min(million_list)
million_list[-1] = max(million_list)

print(sum(million_list))

# Exercise 8 : List and Tuple
# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.

numbers = input ('Give me a sequence of numbers separated by comma: ')

numbers_list = numbers.split(',')
numbers_tuple = tuple(numbers_list)

print(numbers_list)
print(numbers_tuple)

# Exercise 9 : Random number
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.

import random

while True:
    number_user = int(input('Give me a number from 1 to 9: '))
    if number_user in range(1, 10):
        break
    else: 
       print('Not a number from 1 to 9. Give me another: ') 

number_random = random.randint(1,9)

if number_random == number_user:
    print('Winner!')
else:
    print('Better luck next time!')