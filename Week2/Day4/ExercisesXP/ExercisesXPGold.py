# Exercise 1 : When will I retire ?
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).
# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.

# def get_data():
#     while True:
#         gender = input('What is your gender (m/f)? ')
#         if gender.lower() == 'm' or gender.lower() == 'f':
#             break
#         else:
#             print('Please enter m or f')
#     while True:
#         birth_date = input('What is your date of birth? (yyyy/mm/dd) ')
#         if birth_date.count('/') != 2:
#             print('Please enter the date in a yyyy/mm/dd format')
#         else:
#             birth_date = birth_date.split('/')
#             birth_year = int(birth_date[0])
#             birth_month = int(birth_date[1])
#             birth_day = int(birth_date[2])
#             if birth_year in range(0, 2025) and birth_month in range(1, 13) and birth_day in range(1,32):
#                 return(gender, birth_year, birth_month, birth_day)
#             else:
#                 print('Please enter a valid date')

# user_gender, user_birth_year, user_birth_month, user_birth_day = get_data()

# def get_age(year_current, month_current, day_current, year_birth, month_birth, day_birth):
#     if month_birth >= month_current:
#         if day_birth >= day_current:
#             age = (year_current + 1) - year_birth
#         else:
#             age = year_current - year_birth
#     else:
#         age = year_current - year_birth
    
#     return(age)

# user_age = get_age(2023, 11, 29, user_birth_year, user_birth_month, user_birth_day)

# def can_retire(gender, age):
#     if (gender == 'f' and age >= 62) or (gender == 'm' and age >= 67):
#         retirement = True
#     else:
#         retirement = False
#     return(retirement)

# print(can_retire(user_gender, user_age))

# Exercise 2 : Sum
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

# def sum(x:int) -> int:
#     result = x + int(str(x)*2) + int(str(x)*3) + int(str(x)*4)
#     return(result)

# print(sum(3))

# Exercise 3 : Double Dice
# Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.
# Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.

# Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).

# After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
# Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.

# For example:
# If the results of the throws were as follows (your code would do 100 doubles, not just 3):
# (1, 2), (3, 1), (5, 5)
# (3, 3)
# (2, 4), (1, 2), (3, 4), (2, 2)

# Then my output would show something like this:
# Total throws: 8
# Average throws to reach doubles: 2.67.
