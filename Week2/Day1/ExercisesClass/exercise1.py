#For example,  
#my_name = "Frank"  this line creates a name variable type: string 
#print("My name is {}".format(my_name))

cars = 100 #number of available cars
space_in_a_car = 4.0 #how many people can fit into 1 care
drivers = 30 #number of available drives
passengers = 90 #number of passengers to carpool
cars_not_driven = cars - drivers #number of cars without drivers
cars_driven = drivers #number of cars with drivers
carpool_capacity = cars_driven * space_in_a_car #how many passengers can be transported in a day
average_passengers_per_car = passengers / cars_driven #how many passengers can be transported in a single car on average

print('cars:', type(cars))
print('space_in_a_car:', type(space_in_a_car))
print('drivers:', type(drivers))
print('passengers:', type(passengers))
print('cars_not_driven:', type(cars_not_driven))
print('cars_driven:', type(cars_driven))
print('carpool_capacity:', type(carpool_capacity))
print('average_passengers_per_car:', type(average_passengers_per_car))

print(f"There are {cars} cars available.")
print(f"There are only {drivers} drivers available.")
print(f"There will be {cars_not_driven} empty cars today.")
print(f"We can transport {carpool_capacity} people today.")
print(f"We have {passengers} to carpool today.")
print(f"We need to put about {average_passengers_per_car} in each car.")
