string_ex = 'I love Python'
num_ex = 123

print(type(string_ex))
print(type(num_ex))

class Dog():
    def __init__(self, name, color):
        print('A dog was created')
        self.name = name
        self.color = color
    def bark(self):
        print(f'{self.name} barks! WOOF')
    def walk(self, distance):
        print(f'{self.name} walks {distance} km')
    def rename(self, new_name):
        self.name = new_name
        return self.name

alex_dog = Dog('Rex', 'beige')

print(alex_dog.name)
print(alex_dog.color)
print(alex_dog.__dict__)

alex_dog.bark()

stray_dog = Dog('nameless dog', 'black')
stray_dog.walk(5)
stray_dog.rename('Ruth')
stray_dog.bark()

john_dog = Dog('Fluffy', 'white')

all_dogs = [alex_dog, john_dog, stray_dog]

for dog in all_dogs:
    print(dog.name)

class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show_details(self):
        print("Hello my name is " + self.name)

    def rename(self, new_name):
        self.name = new_name
        return self.name


first_person = Person("John", 36)
first_person.show_details()
first_person.rename('Johanna')
first_person.show_details()