# Daily Challenge - Circle

# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

#     Compute the circle’s area
#     Print the attributes of the circle - use a dunder method
#     Be able to add two circles together, and return a new circle with the new radius - use a dunder method
#     Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
#     Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
#     Be able to put them in a list and sort them
#     Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

import math

class Circle:

    def __init__(self, radius=None, diameter=None):
        if (radius is None and diameter is None) or (radius is not None and diameter is not None):
            raise ValueError('Enter either radius or diameter')
        elif diameter:
            self.radius = diameter/2
            self.diameter = float(diameter)
        else:
            self.radius = float(radius)
            self.diameter = float(radius*2)

    def area(self):
        return math.pi * self.radius ** 2

    def __repr__(self):
        return f'A circle with radius of {self.radius} and diameter of {self.diameter}'

    def __add__(self, other):
        return Circle(self.radius + other.radius)

    def __lt__(self, other):
        if self.radius < other.radius:
            return True
        else:
            return False

    def __gt__(self, other):
        if self.radius > other.radius:
            return True
        else:
            return False

    def __eq__(self, other):
        if self.radius == other.radius:
            return True
        else:
            return False

    def list_circles(self, *args):
        circles = [self]
        for circle in args:
            circles.append(circle)
        return sorted(circles, key=lambda x: x.radius)

circle1 = Circle(5)
circle2 = Circle(diameter=40)

print(circle1.radius)

print(circle1.area())

print(circle1)

circle3 = circle1 + circle2

print(circle3)

print(circle3.radius)

print(circle1 < circle2)
print(circle2 > circle3)

my_circles = circle3.list_circles(circle2, circle1)

print(my_circles)