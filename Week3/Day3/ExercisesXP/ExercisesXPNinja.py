# # Exercise 1 : Temperature

# # Write a base class called Temperature.
# # Implement the following subclasses: Celsius, Kelvin, Fahrenheit.
# # Each of the subclasses should have a method which can convert the temperture to another type.
# # You must consider different designs and pick the best one according to the SOLID Principle.

# class Temperature:

#     def __init__(self, degrees):
#         self.degrees = degrees

# class Celsius(Temperature):

#     symbol = '°C'
    
#     def __init__(self, degrees):
#         super().__init__(degrees)

# test = Celsius(30)

# print(test.symbol)