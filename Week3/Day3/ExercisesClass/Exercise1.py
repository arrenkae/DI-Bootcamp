# Given a list of numbers, write a function that returns the sum of every number. BUT you can have a malicious string inside the list.

def list_sum(user_list):
    result = 0
    for item in user_list:
        try:
            result += item
        except TypeError:
            pass
    return result

my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]

print(list_sum(my_list))