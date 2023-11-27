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

