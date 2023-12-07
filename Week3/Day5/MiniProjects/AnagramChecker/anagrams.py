from anagram_checker import AnagramChecker

def anagrams(file):
    checker = AnagramChecker(file)
    while True:
        print('|\n| ANAGRAMS\n| *********\n| Get all the anagrams for your word!\n|')
        user_word = input('| Give me a word: ').strip()
        if not user_word.isalpha() or not checker.is_valid_word(user_word):
            print('| Not a valid word!')
        else:
            anagrams = checker.get_anagrams(user_word)
            print(f'|\n| YOUR WORD: {user_word.upper()}\n| This is a valid English word.\n| Anagrams for your word: {", ".join(anagrams) if anagrams else "none"}')
        if input('|\n| Try another word (y/n)? ').lower() != 'y':
            break


anagrams('sowpods.txt')