# Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

def calculation(num1:int, num2:int)-> tuple:
    add = a + b
    sub = a - b
    return add, sub

a = 6
b = 4

print(f'{a} + {b} is {calculation(a, b)[0]}')
print(f'{a} - {b} is {calculation(a, b)[1]}')