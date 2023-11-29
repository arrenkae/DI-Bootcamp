# Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

def add_sub(a:int, b:int)-> tuple:
    add = a + b
    sub = a - b
    return(add, sub)

num1 = 6
num2 = 4

print(f'{num1} + {num2} is {add_sub(num1, num2)[0]}')
print(f'{num1} - {num2} is {add_sub(num1, num2)[1]}')