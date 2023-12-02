# Exercise 1 : What’s your name ?
# Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
# middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.
# For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
# But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.

def get_full_name(first_name, last_name, middle_name=''):
    full_name = ' '.join([first_name, middle_name, last_name])
    return(full_name)

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))

# Exercise 2 : From English to Morse
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.

morse_table = { 'a':'.-', 'b':'-...',
                    'c':'-.-.', 'd':'-..', 'e':'.',
                    'f':'..-.', 'g':'--.', 'h':'....',
                    'i':'..', 'j':'.---', 'k':'-.-',
                    'l':'.-..', 'm':'--', 'n':'-.',
                    'o':'---', 'p':'.--.', 'q':'--.-',
                    'r':'.-.', 's':'...', 't':'-',
                    'u':'..-', 'v':'...-', 'w':'.--',
                    'x':'-..-', 'y':'-.--', 'z':'--..',
                    '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....',
                    '7':'--...', '8':'---..', '9':'----.',
                    '0':'-----', ', ':'--..--', '.':'.-.-.-',
                    '?':'..--..', '/':'-..-.', '-':'-....-',
                    '(':'-.--.', ')':'-.--.-',' ':'/'}

def encode(text, table):
    code = ''
    for char in text:
        if char.lower() in table:
            code += table[char.lower()]
    return(code)

print(encode('Write a function that converts English text to morse code and another one that does the opposite.', morse_table))

def decode(code, table):
    table_decode = dict(map(reversed,table.items()))
    code_chars = code.split(' ')
    text = ''
    for char in code_chars:
        if char in table_decode:
            text += table_decode[char]
    return(text)

print(decode('.-- .-. .. - . / .- / ..-. ..- -. -.-. - .. --- -. / - .... .- - / -.-. --- -. ...- . .-. - ... / . -. --. .-.. .. ... .... / - . -..- - / - --- / -- --- .-. ... . / -.-. --- -.. . / .- -. -.. / .- -. --- - .... . .-. / --- -. . / - .... .- - / -.. --- . ... / - .... . / --- .--. .--. --- ... .. - . .-.-.- ', morse_table))

def box_printer(*args):
    box_width = len(max(args, key=len)) + 4
    print('*' * box_width)
    for i in range(0, len(args)):
        print('* ' + args[i] + (' ' * (box_width - len(args[i]) - 3)) + '*')
    print('*' * box_width)

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

# Exercise 4
# Analyse this code before executing it. What is the purpose of this code?

def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

# A function that sorts the numbers in a list by iterating through it and swapping the adjacent elements if they are in the wrong order