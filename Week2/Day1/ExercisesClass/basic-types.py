# GETTING STARTED

# STRINGS
# print("Hello World in Python")

# 1ST VALUE TYPE: STRING METHODS
# print("Python is fun".lower())

# print('hello world in HTML'.replace('HTML', 'Python')) #this method gets arguments

# 2ND VALUE TYPE: NUMBERS
# A) integers: values not decimal

# a = 5
# b = 6
# print(dir(a))

# B) floats: 

# 5.5
# 2.77

# print(5 + 7)
# print(13 // 2)
# print(15 % 2)

# my_age = 33
# future_years = 123879

# my_age_future = my_age + future_years
# print(my_age_future)

# str_num1 = str(future_years)
# str_num2 = str(my_age_future)
# print(type(str_num1))
# print("my age in " + str_num1 + " years will be " + str_num2)

# print("Pythonic class \t" * 4)

# in_class = True
# print(type(in_class))

# print('1st', 5 > 3)
# print('2nd', 5 <= 3)
# print('3rd', 5 >= 3)
# print('4th', 5 == '5')
# print('5th', 5 != 3)

# print('1st', 5 is '5')
# print('2nd', 5 is not '5')
# print('3nd', 5 is '5' and 3 == 3)
# print('4th', 5 is '5' or 3 == 3)
# print('5th', 5 is 5 or 3 != 3)

# my_name = 'Nadia'
# other_name = 'Juliana'

# print (my_name is other_name)

# bool_var = None
# print(bool(bool_var))

# my_age = 33
# my_age += 2
# print(my_age)

# my_name = 'Juli'
# my_name += 'ana'
# print(my_name)

# presentation = 'Hello, {} is my name and I am {} years old'.format(my_name, my_age)

# presentation = f'Hello, {my_name} is my name and I am {my_age} years old'
# print(presentation)

# name = input('give me your name: ')
age = int(input('give me your age: '))
# in_5_years = age + 5
# print(f'{name}, in 5 years you will be {in_5_years} years old')

if age >= 18:
    print('You are an adult')
elif 12 < age < 18:
    print('You are a teenager')
else:
    print('You are a child')
