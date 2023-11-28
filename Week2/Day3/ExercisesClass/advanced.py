# for enumerate

students = ['Lior', 'Sveta', 'Estee', 'David']

for i, j in enumerate(students): #unpacks the tuples
    print(i, j)

for name in enumerate(students): #output = tuples
    print(name)

# ZIP

hobbies = ['dance', 'paint', 'cars', 'soccer']

for item in zip(students, hobbies):
    print(item)

print(dict(zip(students, hobbies)))

for i in range(1,6):
    print(i)
else:
    print('finished')


count = 0

while count <= 5:
    print(f'step #{count + 1}')
    count += 1
else:
    print('done')

for letter in 'Leonardo Da Vinci':
    if letter == 'o':
        continue
    else:
        print(letter, end='')

# LIST COMPREHENSION

my_list = [num for num in range(11)]
print(my_list)