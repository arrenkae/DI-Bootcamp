# Exercise 3 : Outputs
# Predict the output of the following code snippets:
# >>> 3 <= 3 < 9
# True

# >>> 3 == 3 == 3
# True

# >>> bool(0)
# False

# >>> bool(5 == "5")
# False

# >>> bool(4 == 4) == bool("4" == "4")
# True

# >>> bool(bool(None))
# False

# x = (1 == True)
# y = (1 == False)
# a = True + 4
# b = False + 10

# print("x is", x)
# x is True
# print("y is", y)
# y is False
# print("a:", a)
# a: 5
# print("b:", b)
# b: 10

# Exercise 4 : How many characters in a sentence ?
# Use python to find out how many characters are in the following text, use a single line of code (beyond the establishment of your my_text variable).

my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit 
           esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum."""
print(len(my_text))

# Exercise 5: Longest word without a specific character
# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.

max_length = 0

while True:
    sentence = input('Give me the longest sentence you can without using a character "A": ')
    if 'a' in sentence.lower():
        print ('I detected an A! Try again')
    elif sentence.lower() == 'stop':
        break
    else:
        if max_length < len(sentence):
            max_length = len(sentence)
            print ('Congradulations! This is your longest sentence so far')
        print (f'Your longest sentense is {max_length} characters long. Now try again!')