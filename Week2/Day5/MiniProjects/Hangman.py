# Hangman
# Use python to create a Hangman game.
# The computer choose a random word and mark stars for each letter of each word.
# Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
# The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
# The player can’t guess the same letter twice.

import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']

def draw(guessed, mistakes):
    if mistakes == 0:
        print('''
           +---+
               |
               |
               |
              ===''')
    if mistakes == 1:
        print('''
           +---+
           O   |
               |
               |
              ===''')
    if mistakes == 2:
        print('''
           +---+
           O   |
           |   |
               |
              ===''')
    if mistakes == 3:
        print('''
           +---+
           O   |
          /|   |
               |
              ===''')
    if mistakes == 4:
        print('''
           +---+
           O   |
          /|\  |
               |
              ===''')
    if mistakes == 5:
        print('''
           +---+
           O   |
          /|\  |
          /    |
              ===''')
    if mistakes == 6:
        print('''
           +---+
           O   |
          /|\  |
          / \  |
              ===''')
    print(''.join(guessed))

def play(wordslist):
    word = random.choice(wordslist)
    guessed = []
    for l in word:
        guessed.append('*')
    mistakes = 0
    draw(guessed, mistakes)
    while True:
        letter = input('Guess a letter: ').lower()
        if len(letter) > 1 or not letter.isalpha():
            print('That\'s not a letter!')
        elif letter.lower() in guessed:
            print('You already guessed this one!')
        else:
            if letter in word:
                print('You guessed right!')
                for i, l in enumerate(list(word)):
                    if l == letter:
                        guessed[i] = letter
            else:
                print('You guessed wrong!')
                mistakes += 1
            draw(guessed, mistakes)
            if '*' not in guessed:
                print('You won! Congradulations!')
                return
            elif mistakes >= 6:
                print('You have been hanged. Game over!')
                return

play(wordslist)