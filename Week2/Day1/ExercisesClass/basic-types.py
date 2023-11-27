# GETTING STARTED WITH PYTHON

# STRINGS

print("Hello World in Python")

#FIRST VALUE TYPE: STRING METHODS
print("PYTHON is fun".lower())

print('hello world in HTML'.replace('HTML', 'Python')) #this method gets arguments

#2ND VALUE TYPE: NUMBERS
#A) integers: values not decimal

a = -5
b = 3

print(type(a))

# B) floats: 

5.5
2.77

print(5 + 7)
print(13 // 2)
print(15 % 2)

my_age = '33'
future_years = 123879 

# my_age_f = my_age + future_years
# print(my_age_f)

str_age = int(my_age)
print(type(str_age)) # '123879'

my_age_f = str_age + future_years
print(my_age_f)

print("Pythonic class \t" * 4)

in_class = True
print(type(in_class))


print('1st', 5 > 3)
print('2nd', 5 <= 3)
# print('3th', 5 >= '3') WILL GIVE A TypeError
print('4th' ,5 == '5')
print('5th', 5 != 3)
my_name = 'Maria'
other_name = 'Maria'
my_name = "Joana"

print('1th', my_name is other_name)
print('2th', 5 is not '5')
print('3th', 5 is '5' and 3 == 3)
print('4th', 5 is 5 and 3 == 3)
print('5th', 5 is 5 or 3 != 3)

bool_var = False

print(bool(bool_var))

my_age = 33

my_age += 2
print(my_age)

my_name = 'Juli'

my_name += 'ana'

print(my_name)

score = 0
#code your game

score += 1

#FORMAT METHOD WAY
presentation = 'Hello, {} is myname and I am {} years old'.format(my_name, my_age)

print(presentation)

#F STRING WAY
presentation = f'''Hello, 
{my_name} is myname and I am 
{my_age} years old'''


user_name = input('give me your name: ')
user_age = int(input('give me your age: '))
in_years = user_age + 5

print(in_years)

#CONDITIONALS

#USE SIGN COMPARISON OPERATOR IN NUMBERS AND KEYWORD COMPARISON IN THE OTHER VALUE TYPES

age = int(input("How old are you? "))
print(f"You are {age} years old")

if age >= 18: #if [condition]: [do the following indented code]
    print('You are an adult') #will happen if the condition is True
elif  18 > age > 12 :
    print('You are not a teenager')
else:
    print('you are a child')