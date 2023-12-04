# Exercise 4 : Family

# Create a class called Family and implement the following attributes:
# members: list of dictionaries
# last_name : (string)

# Implement the following methods:
# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.

# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

class Family:

    def __init__(self, last_name, members=[]):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        print('Congratulations on a new family member!')
        self.members.append({key: value for (key, value) in kwargs.items()})

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    return True
                else:
                    return False

    def family_presentation(self):
        print(f'The {self.last_name} family:\n')
        for member in self.members:
            for key, value in member.items():
                print(key + ': ' + str(value))
            print('')

my_family = Family('Smith', [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ])

my_family.family_presentation()

my_family.born(name='Teddy', age=0, gender='Male', is_child=True)

my_family.family_presentation()

print(my_family.is_18('Michael'))
print(my_family.is_18('Teddy'))