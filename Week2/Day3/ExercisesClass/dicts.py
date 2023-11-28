# DICTIONARIES

users = {'name' : 'Harry Potter',
        'age' : 33,
        'height' : 1.7,
        'wizard' : True,
        'house' : 'Griffindor',
        'hobbies' : ['Quidditch', 'adventures', 'magic'],
        'friends': {'Hermione','Ron'},
        'family' :
        {'wife' : 'Gina Weaseley',
        'mother' : 'Lily Potter',
        'father' : 'James Potter'}}

print(users['age'])
print(users['hobbies'][0])
print(users['friends'])
print('wizard' in users)
print(users['family']['wife'])

#LIST OF DICTIONARIES

shirts = [
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]

print(shirts[0]['price'])

# MODIFY ENTRY IN A DICTIONARY

users['house'] = 'Slytherin'
print(users['house'])

# add a new key value

users['pet'] = 'Hedwig'
print(users['pet'])

# delete entry

del users['height']

print(users.keys())
print(users.values())
print(users.items())

family_members = {'son' : 'Albus Sirius Potter',
                'wife' : 'Draco Malfoy'}

users['family'].update(family_members)

print(users['family'])

dict1 = {'apple': 2, 'banana': 4, 'pineapple': 3}
dict2 = {'apple': 2, 'banana': 15, 'pineapple': 3, 'grape': 5}

dict1.update(dict2)

print(dict1)

# LOOPS

my_books = {
  "title": "Harry Potter",
  "author": "JK Rowling",
}

for key, value in my_books.items():
    print(f'the {key} is {value}')