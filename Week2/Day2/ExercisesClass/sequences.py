# LISTS

# name = 'Harry Potter'
# age = 33
# height = 1.70
# wizard = True

# users_a = [name, age, height, wizard]
# users_b = list(name) #list constructor
# users_c = ['Harry Potter', 33, 1.70, True]
# new_user = ['Ron Weasley', 34, 1.8, True]

# print(users_a, users_b)
# print(users_a[1])

# wife = 'Gina Weasley'
# users_a.append(wife)

# print(users_a)
# print(users_a[-1])

# some_str = 'Python'
# print(some_str[1:4]) # I can access indexes

# print(users_a[1:3])

# users_c.remove('Harry Potter')
# print(users_c)
# users_c.pop(2)
# print(users_c)

#ADDING LISTS

# users_all = users_a + new_user
# print(users_all)

# users_a.append(new_user)
# print(users_a)

# users_a.extend(new_user)
# print(users_a)

# print(len(users_a))

# num = [4,8,6,2]
# print(sum(num))

# print(sorted(num))

# num.sort() # changes the list itself
# print(num)


# TUPLES

# passwords = ('some_pass', 'other_pass', )

# Unpacking tuples

# a,b,c,d = (2,4,6,8)
# print(a)
# print(b)
# print(c)
# print(d)

#SETS
my_set = set()
my_set2 = {60, 14, 'Morty'}
my_set3 = {'Jerry', 'Summer'}

my_set.add('Rick')
my_set.add('Morty')
my_set.add('Rick')

print(my_set)

print(my_set.intersection(my_set2))
print(my_set.difference(my_set2))

print(my_set.union(my_set3))