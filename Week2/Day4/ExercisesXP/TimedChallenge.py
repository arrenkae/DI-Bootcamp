# Count occurence
# Write a program which takes a string and a character as an input, and finds out the number of occurrences the character has in the string.

def count_occurence(string, char):
    count = 0
    for i in string:
        if char == i:
            count += 1
    return(count)

print(count_occurence('Programming is cool!', 'o'))
print(count_occurence('This is a great example', 'y'))