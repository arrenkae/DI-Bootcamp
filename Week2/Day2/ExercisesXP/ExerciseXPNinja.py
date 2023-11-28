# Exercise 1: Formula
# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results

import math

# C = 50
# H = 30

# user_numbers = input('Give me a comma-separated list of numbers: ')
# numbers_list = [int(i) for i in user_numbers.split(',')]
# results_list = []

# for D in numbers_list:
#     results_list.append(str(math.floor(math.sqrt((2 * C * D)/H))))

# results = ','.join(results_list)
# print(results)

# Exercise 2 : List of integers
# Given a list of 10 integers to analyze
# Store the list of numbers in a variable.
# Print the following information:
# a. The list of numbers printed in a single line
# b. The list of numbers sorted in descending order (largest to smallest)
# c. The sum of all the numbers
# A list containing the first and the last numbers.
# A list of all the numbers greater than 50.
# A list of all the numbers smaller than 10.
# A list of all the numbers squared eg. for [1, 2, 3] you would print “1 4 9”.
# The numbers without any duplicates also print how many numbers are in the new list.
# The average of all the numbers.
# The largest number.
# 10.The smallest number.
# 11.Bonus: Find the sum, average, largest and smallest number without using built in functions.
# 12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
# 13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
# 14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
# 15.Bonus: Will the code work when the number of random numbers is not equal to 10?

import cmath

numbers = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]

print(numbers)
print(sorted(numbers, reverse=True))
print(sum(numbers))
print([numbers[0], numbers[-1]])
print([num for num in numbers if num > 50])
print([num for num in numbers if num < 50])
print([cmath.sqrt for num in numbers])