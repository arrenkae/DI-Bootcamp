# Advanced Algorithm
# Here is a python code that generate a list of 20000 random numbers, called list_of_numbers.
# Extend this code to guess how many couples of numbers in list_of_numbers sum to target_number.

import random

list_of_numbers = [random.randint(0, 10000) for i in range(20000)]
target_number = 3728

def target_sum_couples(numbers:list, target:int):
    count = 0
    for i, num1 in enumerate(numbers):
        for num2 in numbers[i+1:]:
            if num1 + num2 == target:
                count += 1
    return(count)

print(target_sum_couples(list_of_numbers,target_number))
