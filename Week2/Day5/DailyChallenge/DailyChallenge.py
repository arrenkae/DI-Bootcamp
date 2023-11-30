# Challenge 1 : Sorting
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension

def sort_words(words):
    words_sorted = ','.join([word for word in sorted(words.split(','))])
    return words_sorted

print(sort_words('without,hello,bag,world'))

# Challenge 2 : Longest Word
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

def longest_word(sentence):
    words = sentence.split(' ')
    longest = words[0]
    for i in range(1,len(words)):
        if len(words[i]) > len(longest):
            longest = words[i]
    return(longest)

print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))