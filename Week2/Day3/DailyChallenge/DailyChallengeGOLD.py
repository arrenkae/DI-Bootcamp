# Caesar Cypher
# In cryptography, a Caesar cipher is  one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.
# For example, with a left shift of 3 –> D would be replaced by A, –> E would become B, and so on.
# The method is named after Julius Caesar, who used it in his private correspondence.
# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given message and a given shift. 

text = input('Give me a text: ')
key = int(input('Give me the key: '))

while True:
    direction = input('Left or right? ')
    if direction.lower() == 'right':
        direction = 1
        break
    if direction.lower() == 'left':
        direction = -1
        break
    else:
        print('Please choose left or right')

while True:
    enc_dec = input('Encrypt or decrypt? ')
    if enc_dec.lower() == 'encrypt':
        enc_dec = 1
        break
    if enc_dec.lower() == 'decrypt':
        enc_dec = -1
        break
    else:
        print('Please choose encrypt or decrypt')

cypher_text = ''

for letter in text:
    if letter.isalpha():
        cypher_text += chr((ord(letter) + (key * direction * enc_dec)))
    else:
        cypher_text += letter

print(cypher_text)