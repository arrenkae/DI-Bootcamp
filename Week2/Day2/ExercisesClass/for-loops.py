students = ['Lior', 'Sveta', 'Estee', 'David']


#regular for loop
for each_s in students:
    if each_s is 'Sveta':
        print('Happy b-day, Sveta')
    else:
        print(f'hello, {each_s}')


# for loop + range()
for i in range(11):
    print(i)

some_l = list(range(1,11)) #the range constructor
print(some_l)


#Built-In functions that uses for loops
print(sum(some_l))
print(min(some_l))
print(max(some_l))

#sum behind the scenes (uses a for loop)
result = 0
for i in some_l:
    result += i

print(result)


# for enumerate
for i, j in enumerate(students):
    if i == 2:
        print(j)


#While with counter
count = 1
while count <= 5:
    print('python')
    count += 1

#while with flag
active = True #flag

while active:
    user_str = input('give a word again: ') 
    if user_str == 'quit':
        print('Thanks for playing')
        break
    elif len(user_str) == 10:
        active = False
        print('Congrats!') 
    elif len(user_str) == 5:
        continue
        


    
    

