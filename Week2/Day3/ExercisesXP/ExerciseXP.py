# Exercise 1 : Convert lists into dictionaries
# Convert the two following lists, into dictionaries.

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

final_dict = dict(zip(keys, values))
print(final_dict)

# Exercise 2 : Cinemax
# A movie theater charges different ticket prices depending on a person's age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Given the following object:
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# How much does each family member have to pay ?
# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

family = {}
cost = 0

while True:
    name = input("Ticket for (press q to stop): ")
    if name == "q":
        break
    else:
        family[name] = int(input("Age: "))

for age in family.values():
    if 3 <= age <= 12:
        cost += 10
    elif age > 12:
        cost += 15

print(cost)

# Exercise 3: Zara
# Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: France: blue, Spain: red, US: pink, green
# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:
# creation_date: 1975 
# number_stores: 10 000
# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# 14. Print the value of the key number_stores. What just happened ?

brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
    }
}

brand['number_stores'] = 2

print(f"{brand['name']}'s clients are {brand['type_of_clothes'][0]}, {brand['type_of_clothes'][1]} and {brand['type_of_clothes'][2]}")

brand['country_creation'] = 'Spain'

if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

del brand['creation_date']

print(brand['international_competitors'][-1])
print(brand['major_color']['US'])

print(len(brand))
print(brand.keys())

more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}

brand.update(more_on_zara)

print(brand['number_stores']) # value of number_stores from brand dictionary got replaced by value of number_stores from more_on_zara

# Exercise 4 : Disney characters
# Use this list :
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :
# 1)
# >>> prin.t(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
# 2)
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
# 3)
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {}
disney_users_B = {}

for index, value in enumerate(users):
    disney_users_A[value] = index
    disney_users_B[index] = value

print(disney_users_A)
print(disney_users_B)

disney_users_C = {value:index for index, value in enumerate(sorted(users))}

print(disney_users_C)