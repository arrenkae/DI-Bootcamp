# Exercise: check for duplicates in list:

some_list = ['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n']

duplicates = []
for value in some_list:
    if some_list.count(value) > 1 and value not in duplicates:
        duplicates.append(value)

print(duplicates)