# class Circle:
#     color = "red"

#     def __init__(self, diameter):
#         self.diameter = diameter

#     def grow(self, factor=2):
#         self.diameter = self.diameter * factor

#     def change_color(self, color):
#         self.color = color
#         return self.color

# circle1 = Circle(2)
# print(circle1.color)
# print(Circle.color)
# circle1.grow(3)
# print(circle1.diameter)
# circle1.change_color("blue")
# print(circle1.color)

class Person:

    used_names = set()

    def __init__(self, name, age):
        if name in self.used_names:
            name = input("That name is taken. Enter another name: ")

        self.name = name
        self.age = age
        self.used_names.add(name)

    @classmethod
    def fromYear(cls, name, birth_year):
        THIS_YEAR = 2020
        return cls(name, THIS_YEAR - birth_year)

    @property
    def professional_name(self):
        return "Mr " + self.name

joe = Person('Joe', 45)
joe1 = Person('Joe', 40)
print(Person.used_names)
ju_age = Person.fromYear('Juliana', 1990)
print(ju_age.age)
print(Person.used_names)

