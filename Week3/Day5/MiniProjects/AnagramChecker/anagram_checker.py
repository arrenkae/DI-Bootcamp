import os

dir_path = os.path.dirname(os.path.realpath(__file__))

class AnagramChecker:

    def __init__(self, file):
        with open(f'{dir_path}/{file}','r') as f:
            self.words = f.read().lower()

    def is_valid_word(self, word):
        if word.lower() in self.words.split():
            return True
        else:
            return False

    def is_anagram(self, word1, word2):
        if sorted(word1.lower()) == sorted(word2.lower()):
            return True
        else:
            return False

    def get_anagrams(self, word):
        if self.is_valid_word(word):
            anagrams = []
            for word2 in self.words.split():
                if self.is_anagram(word, word2) and word2 != word:
                    anagrams.append(word2)
            return anagrams
        else:
            raise Exception('Invalid word')


test = AnagramChecker('sowpods.txt')

print(test.get_anagrams('meat'))