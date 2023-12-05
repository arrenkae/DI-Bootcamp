def divide(x,y):
    try:
        result = x/y

    except TypeError:
        print('One of the arguments is not int')
    except ZeroDivisionError:
        print('Can\'t divide by zero')

    else:
        return result

print(divide('o', 9))
print(divide(9, 0))
print(divide(9, 3))