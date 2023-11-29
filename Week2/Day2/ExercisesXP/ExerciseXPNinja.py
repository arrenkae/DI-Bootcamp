# Exercise 1: Formula
# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results

import math

C = 50
H = 30

user_numbers = input('Give me a comma-separated list of numbers: ')
numbers_list = [int(i) for i in user_numbers.split(',')]
results_list = []

for D in numbers_list:
    results_list.append(str(math.floor(math.sqrt((2 * C * D)/H))))

results = ','.join(results_list)
print(results)

# Exercise 2 : List of integers
# Given a list of 10 integers to analyze
# Store the list of numbers in a variable.
# Print the following information:
# The list of numbers printed in a single line
# The list of numbers sorted in descending order (largest to smallest)
# The sum of all the numbers
# A list containing the first and the last numbers.
# A list of all the numbers greater than 50.
# A list of all the numbers smaller than 10.
# A list of all the numbers squared eg. for [1, 2, 3] you would print “1 4 9”.
# The numbers without any duplicates also print how many numbers are in the new list.
# The average of all the numbers.
# The largest number.
# The smallest number.
# Bonus: Find the sum, average, largest and smallest number without using built in functions.
# Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
# Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
# Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
# Bonus: Will the code work when the number of random numbers is not equal to 10?

numbers = [3, 47, 99, -80, 22, 97, 54, -23, 3, 3, 5, 7, 99]

print(numbers)
print(f'In descending order: {sorted(numbers, reverse=True)}')
print(f'Sum: {sum(numbers)}')
print(f'First: {numbers[0]}, last: {numbers[-1]}')
print(f'Greater than 50: {[num for num in numbers if num > 50]}')
print(f'Less than 10: {[num for num in numbers if num < 10]}')
print(f'Squared: {[num**2 for num in numbers if num >= 0]}')

dedup = []
[dedup.append(num) for num in numbers if num not in dedup]
print(f'Without duplicates: {dedup}')
print(f'Length without duplicates: {len(dedup)}')

print(f'Average: {sum(numbers) // len(numbers)}')

print(f'Min: {min(numbers)}')

numbers_sum = 0
numbers_len = 0
numbers_max = numbers[0]
numbers_min = numbers[0]

for num in numbers:
    numbers_sum += num
    numbers_len += 1
    if num > numbers_max:
        numbers_max = num
    if num < numbers_min:
        numbers_min = num

print(f'Sum: {numbers_sum}')
print(f'Average: {numbers_sum // numbers_len}')
print(f'Max: {numbers_max}')
print(f'Min: {numbers_min}')

# Exercise 3: Working on a paragraph
# Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
# Paste it to your code, and store it in a variable.
# Let’s analyze the paragraph. Print out a nicely formatted message saying:
# How many characters it contains (this one is easy…).
# How many sentences it contains.
# How many words it contains.
# How many unique words it contains.
# Bonus: How many non-whitespace characters it contains.
# Bonus: The average amount of words per sentence in the paragraph.
# Bonus: the amount of non-unique words in the paragraph.

story = """Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."""

print(f'The story of Darth Plagueis The Wise contains {len(story)} characters.')
print(f'The story of Darth Plagueis The Wise contains {story.count(".") + story.count("?") + story.count("!") + story.count("…")} sentences.')
print(f'The story of Darth Plagueis The Wise contains {len(story.split())} words.')
print(f'The story of Darth Plagueis The Wise contains {len(set(story.split()))} unique words.')
print(f'The story of Darth Plagueis The Wise contains {len(story) - story.count(" ")} non-whitespace characters.')
print(f'The story of Darth Plagueis The Wise contains {(len(story.split())) // (story.count(".") + story.count("?") + story.count("!") + story.count("…"))} words per sentence on average.')
print(f'The story of Darth Plagueis The Wise contains {len(story.split()) - len(set(story.split()))} non-unique words.')