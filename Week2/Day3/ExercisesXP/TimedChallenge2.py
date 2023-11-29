# Perfect number
# A perfect number is a positive integer that is equal to the sum of its divisors.
# However, the number itself is not included in the sum.
# Ask the user for a number and print whether or not it is a perfect number. If yes, print True else False.

x = int(input('Enter the Number: ')) 

sum = 0

for i in range (1, x):
    if x % i == 0:
        sum += i

if sum == x:
    print(True)
else:
    print(False)