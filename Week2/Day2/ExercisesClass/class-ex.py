# 1 - SEQUENCES EXERCISE

list1 = [5, 20, 10, 15, 25, 50, 20]

print(list1.index(20))

if 20 in list1:
    index20 = list1.index(20)
    list1.remove(20)
    list1.insert(index20, 200)

print(list1)

# 2 - FOOR LOOP EXERCISE

user_num = int(input('give a number'))
print(type(user_num))

for i in range(1,11):
    print(i * user_num)

# 3 - WHILE LOOP EXERCISE
num = 1
while num <= 10:
    print(num)
    num += 1



