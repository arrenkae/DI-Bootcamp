# Exercise 1

#     Draw the following pattern using for loops:
#   *
#  ***
# *****

for i, j in zip(range(2,-1,-1), range(1, 6, 2)):
    print(' ' * i + '*' * j)

#     Draw the following pattern using for loops:
#     *
#    **
#   ***
#  ****
# *****

for i in range(1, 6):
    print(' ' * (5-i) + '*' * i)

#     Draw the following pattern using for loops:
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *

for i in range(1, 6):
    print('*' * i)

for i in range(5, 0, -1):
    print(' ' * (5-i) + '*' * i)

# Exercise 2
# Analyse this code before executing it. Write some commnts next to each line. Write the value of each variable and their changes, and add the final output. Try to understand the purpose of this program.

my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1): # iterates through list indexes excluding [-1]
    minimum = i
    for j in range(i + 1, len(my_list)): # iterates through list indexes starting with the next item
        if(my_list[j] < my_list[minimum]):
            minimum = j
            if(minimum != i): # checks if minimum index has changed
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i] # if the next number in list is less than the current one, swaps them
print(my_list)

# i = 0 = minimum
# j = 1
# 24 > 2
# minimum hasn't changed
# i = 1 = minimum
# j = 2
# 12 < 24
# minimum = 2
# 24, 12 = 12, 24
# i = 2 = minimum
# j = 3
# 354 > 24
# minimum hasn't changed
# i = 3 = minimum
# j = 4
# 233 < 354
# minimum = 4
# 354, 233 = 233, 354
# i = 4 = minimum
# j = 4
# same item, nothing happends
# list is now sorted