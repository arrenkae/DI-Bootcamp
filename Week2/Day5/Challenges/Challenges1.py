# Exercise 1
# Write a script that inserts an item at a defined index in a list.

def index_insert(list, item, index):
    list_pt1 = list[:index]
    list_pt2 = list[index:]
    list_pt1.append(item)
    list_new = list_pt1 + list_pt2
    return(list_new)

# print(index_insert(['apple', 'banana', 'cherry', 'orange'], 'tomato', 2))

# Exercise 2
# Write a script that counts the number of spaces in a string.

def count_spaces(user_string):
    counter = 0
    for char in user_string:
        if char == ' ':
            counter += 1
    return(counter)

# print(count_spaces('Write a script that counts the number of spaces in a string.'))

# Exercise 3
# Write a script that calculates the number of upper case letters and lower case letters in a string.

def count_upper_lower(user_string):
    count_upper = 0
    count_lower = 0
    for char in user_string:
        if char.isupper():
            count_upper += 1
        elif char.islower():
            count_lower += 1
    return(count_upper, count_lower)

# print(count_upper_lower('EXERCISE 3: Write a script that calculates the number of upper case letters and lower case letters in a string.'))

# Exercise 4
# Write a function to find the sum of an array without using the built in function:
# >>>my_sum([1,5,4,2])
# >>>12

def my_sum(numbers):
    result = 0
    for num in numbers:
        result += num
    return(result)

# print(my_sum([1,5,4,2]))

# Exercise 5
# Write a function to find the max number in a list
# >>>find_max([0,1,3,50])
# >>>50

def find_max(numbers):
    num_max = numbers[0]
    for num in numbers[1:]:
        if num > num_max:
            num_max = num
    return(num_max)

# print(find_max([0,1,3,50]))

# Exercise 6
# Write a function that returns factorial of a number
# >>>factorial(4)
# >>>24

def factorial(num):
    result = 1
    for i in range(1,num+1):
        result = result * i
    return(result)

# print(factorial(4))

# Exercise 7
# Write a function that counts an element in a list (without using the count method):
# >>>list_count(['a','a','t','o'],'a')
# >>>2

def list_count(list, char):
    count = 0
    for item in list:
        if item == char:
            count += 1
    return(count)

# print(list_count(['a','a','t','o'],'a'))

# Exercise 8
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:
# >>>norm([1,2,2])
# >>>3

def norm(numbers):
    squares_sum = my_sum([num ** 2 for num in numbers])
    result = squares_sum ** (1/2)
    return(result)

# print(norm([1,2,2]))

# Exercise 9
# Write a function to find if an array is monotonic (sorted either ascending of descending)
# >>>is_mono([7,6,5,5,2,0])
# >>>True
# >>>is_mono([2,3,3,3])
# >>>True
# >>>is_mono([1,2,0,4])
# >>>False

def is_mono(array):
    if array == sorted(array) or array == sorted(array, reverse=True):
        return True
    else:
        return False

# print(is_mono([7,6,5,5,2,0]))
# print(is_mono([2,3,3,3]))
# print(is_mono([1,2,0,4]))

# Exercise 10
# Write a function that prints the longest word in a list.

def print_longest(words):
    longest = words[0]
    for word in words[1:]:
        if len(word) > len(longest):
            longest = word
    return print(longest)

# print_longest(['apple', 'banana', 'elderberry', 'cherry', 'orange'])

# Exercise 11
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.

def split_types(user_list):
    int_list = [item for item in user_list if type(item) is int]
    str_list = [item for item in user_list if type(item) is str]
    return(int_list, str_list)

# print(split_types([-5, 'apple', 'banana', 42, 99, 'cherry', 'orange']))

# Exercise 12
# Write a function to check if a string is a palindrome:
# >>>is_palindrome('radar')
# >>>True
# >>>is_palindrome('John)
# >>>False

def is_palindrome(user_string):
    if user_string == user_string[::-1]:
        return True
    else:
        return False

# print(is_palindrome('radar'))
# print(is_palindrome('John'))

# Exercise 13
# Write a function that returns the amount of words in a sentence with length > k:
# >>>sentence = 'Do or do not there is no try'
# >>>k=2
# >>>sum_over_k(sentence,k)
# >>>3

def sum_over_k(sentence, k):
    count = 0
    for word in sentence.split():
        if len(word) > k:
            count += 1
    return(count)

# print(sum_over_k('Do or do not there is no try', 2))

# Exercise 14
# Write a function that returns the average value in a dictionary (assume the values are numeric):
# >>>dict_avg({'a': 1,'b':2,'c':8,'d': 1})
# >>>3

def dict_avg(user_dict):
    result = my_sum(list(user_dict.values())) / len(user_dict)
    return(result)

# print(dict_avg({'a': 1,'b':2,'c':8,'d': 1}))

# Exercise 15
# Write a function that returns common divisors of 2 numbers:
# >>>common_div(10,20)
# >>>[2,5,10]

def common_div(num1, num2):
    divs1 = [div for div in range(2,num1+1) if num1 % div == 0]
    divs2 = [div for div in range(2,num2+1) if num2 % div == 0]
    divs_common = [div for div in divs1 if div in divs2]
    return(divs_common)

# print(common_div(10,20))

# Exercise 16
# Write a function that test if a number is prime:
# >>>is_prime(11)
# >>>True

def is_prime(num):
    if num <= 1:
        return False
    else:
        for i in range(2,num):
            if num % i == 0 and i != num:
                return False
        else:
            return True

# print(is_prime(11))

# Exercise 17
# Write a function that prints elements of a list if the index and the value are even:
# >>>weird_print([1,2,2,3,4,5])
# >>>[2,4]

def weird_print(user_list):
    list_to_print = [value for index, value in enumerate(user_list) if index % 2 == 0 and value % 2 == 0]
    return print(list_to_print)

# weird_print([1,2,2,3,4,5])

# Exercise 18
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:
# >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
# >>int: 1, str:1 , float:1, bool:2

def type_count(**kwargs):
    int_count = len([val for val in kwargs.values() if type(val) is int])
    str_count = len([val for val in kwargs.values() if type(val) is int])
    float_count = len([val for val in kwargs.values() if type(val) is float])
    bool_count = len([val for val in kwargs.values() if type(val) is bool])
    result_count = {
        'int': int_count,
        'str': str_count,
        'float': float_count,
        'bool': bool_count
    }
    return(result_count)

# print(type_count(a=1,b='string',c=1.0,d=True,e=False))

# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.
# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.

def makelist(user_string, separator=' '):
    separated = []
    item = ''
    for char in user_string:
        if char != separator:
            item += char
        else:
            separated.append(item)
            item = ''
    separated.append(item)
    return(separated)

# print(makelist('By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.'))
# print(makelist('By default/the function uses whitespace/but it should be able to take an argument/for any character/and split with that argument.', '/'))

# Exercise 20
# Instructions
# Convert a string into password format.
# Example:
# input : "mypassword"
# output: "***********"

def hide_password(password):
    password_hidden = '*' * len(password)
    return(password_hidden)

print(hide_password('12345'))