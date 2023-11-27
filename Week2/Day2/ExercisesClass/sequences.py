# LISTS

f_name = 'Harry Potter'
age = 33
heigh = 1.70
wizard = True
profession = 'teacher'
house = 'Grifyndor'

users_a = [f_name, age, heigh, wizard,profession, house] #square brackets
users_b = list() #list constructor
users_c = ['Harry Potter', 33, 1.7, True]
new_user = ['Ron Weasley', 34, 1.8, True]

# METHODS

wife = "Gina Weasley"
users_a.append(wife)

# print(users_a[1:3]) #slicing/indexing
users_c.remove('Harry Potter')
print(users_c)

users_c.pop(1)
print(users_c)


#ADDING LISTS

#a) +
print(users_c + new_user)

#b) append() the appended list will be an element of the list
users_c.append(new_user)

#c) extend()
users_c.extend(new_user)

#d) insert
users_c.insert(3, 'Hermione Granger')

#LEN: will output a number that is the lenght of the list
print(users_c)
print(len(users_c))

#SUM : it sums all the elements from the list
num = [6,4,2,8]
print(sum(num))

#SORTING LISTS

#sorted()
sorted(num) #creates a new list wich is sorted
print('after sorted: the original list stays the same', num)

new_sorted_l = sorted(num)
print('new sorted list saved in a variable: ', new_sorted_l)

#sort()
num.sort() #changes the list itself: No need to create a variable to store it
print(num)


#TUPLES
passwords1 = ('some_pass', 'other_pass')
passwords2 = ('3th_pass',)

pass3 = passwords1 + passwords2

print(pass3[-1])

#STRINGS * a sequence of chars ONLY

some_str = "Python"
print(some_str[1:4]) #I can access indexes

#Unpacking tupples

a,b,c,d = (2,4,6,8)
print(a)
print(b)
print(c)
print(d)

#SETS - From python 3.7 sets are ordered. They will mantain the order that the elements were created or added.
my_set = set()
my_set2 = {60, 14, 'Anna', 'Morty'}
my_set3 = {1,2,3,4,5}
print(my_set3)

my_set.add('Rick')
my_set.add('Morty')
my_set.add('Rick')
my_set.add('John')

print(my_set)

inter = my_set.intersection(my_set2)
print('intersection:', inter)

dif= my_set.difference(my_set2)
print(dif)

print(my_set.union(my_set2))

