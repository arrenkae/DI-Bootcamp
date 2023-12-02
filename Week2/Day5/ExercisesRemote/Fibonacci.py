# Make a function for fibonacci numbers

def fib(index):
    a = 0
    b = 1
    for i in range(index+1):
        yield a
        a, b = b, a+b

for x in fib(20):
    print(x)