# Exercise 1 : Cars
# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
# Convert it into a list using Python (don’t do it by hand!).
# Print out a message saying how many manufacturers/companies are in the list.
# Print the list of manufacturers in reverse/descending order (Z-A).
# Using loops or list comprehension:
# Find out how many manufacturers’ names have the letter ‘o’ in them.
# Find out how many manufacturers’ names do not have the letter ‘i’ in them.
# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# Remove these programmatically. (Hint: you can use set to help you).
# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.
# Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
cars_list = cars.split(', ')

print(f'There are {len(cars_list)} car manufacturers in the list.')
print(sorted(cars_list, reverse=True))
count_o = 0
count_no_i = 0

for name in cars_list:
    if 'o' in name:
        count_o += 1
    if 'i' not in name:
        count_no_i += 1

print(f'There are {count_o} car manufacturers that have letter "o" in their name.')
print(f'There are {count_no_i} car manufacturers that don\'t have letter "i" in their name.')

cars_list_2 = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars_list_2_dedup = set(cars_list_2)
print(', '.join(cars_list_2_dedup))

print([name[::-1] for name in sorted(cars_list_2_dedup)])