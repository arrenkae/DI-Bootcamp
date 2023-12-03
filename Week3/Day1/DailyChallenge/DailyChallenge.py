# Old MacDonald’s Farm
# Take a look at the following code and output:

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())

# Output
# McDonald's farm
# cow : 5
# sheep : 2
# goat : 12
# E-I-E-I-0!

# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:
# reate a class called Farm. How should it be implemented?
# Does the Farm class need an __init__ method? If so, what parameters should it take?
# How many methods does the Farm class need?
# Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# Test your code and make sure you get the same results as the example above.
# Bonus: nicely line the text in columns as seen in the example above. Use string formatting.

class Farm:

    def __init__(self, owner_name):
        self.name = owner_name
        self.animals = {}

    def add_animal(self, animal, number=1):
        if animal not in self.animals.keys():
            self.animals[animal] = 0
        self.animals[animal] += number
        return self.animals

    def get_info(self):
        print(f'{self.name}\'s farm')
        for key, value in self.animals.items():
            print(f'{key}: {value}')
        print('E-I-E-I-0!')

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())