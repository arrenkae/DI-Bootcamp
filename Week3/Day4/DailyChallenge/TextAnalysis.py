# Daily challenge : Text Analysis

# Part I

# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

#     Create a class called Text that takes a string as an argument and store the text in a attribute.
#     Hint: You need to manually copy-paste the text, straight into the code

#     Implement the following methods:
#         a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
#         a method that returns the most common word in the text.
#         a method that returns a list of all the unique words in the text.


# Part II

# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

#     Implement a classmethod that returns a Text instance but with a text file:

#         >>> Text.from_file('the_stranger.txt')

#     Hint: You need to open and read the text from the text file.

#     Now, use the provided the_stranger.txt file and try using the class you created above.


# Bonus:

#     Create a class called TextModification that inherits from Text.

#     Implement the following methods:
#         a method that returns the text without any punctuation.
#         a method that returns the text without any english stop-words (check out what this is !!).
#         a method that returns the text without any special characters.

# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

class Text:

    stop_words = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', "he'd",
        'him', 'his', 'himself', 'she', "she'd", "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which',
        'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did',
        'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through',
        'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there',
        'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too',
        'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't",
        'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn',
        "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't", 'would', 'ii', 'iii', 'iv']
    special_chars = '''!()-—[]{};:'"\,<>./?@#$%^&*_~1234567890♦'''

    def __init__(self, text):
        self.text = text
        self.wordcount = self.wordcount()
    
    def wordcount(self):
        words = []
        for word in self.text.lower().split():
            word_clean = word.lower().strip(Text.special_chars).replace("'s",'')
            if word_clean not in Text.stop_words and len(word_clean) > 1:
                words.append(word_clean)
        wordcount = {}
        for word in words:
            wordcount.setdefault(word, 0)
            wordcount[word] += 1
        return wordcount

    @classmethod
    def from_file(cls, file):
        with open(file,encoding = 'utf-8') as f:
            text = f.read()
        return cls(text)

    def frequency(self, word):
        if word in self.wordcount:
            return self.wordcount[word]

    def most_common(self):
        max_count = max(self.wordcount.values())
        return [word for word in self.wordcount if self.wordcount[word] == max_count]

    def unique_words(self):
        
        return set(self.wordcount.keys())

text1 = Text('A good book would sometimes cost as much as a good house (sometimes).')

print(text1.frequency('good'))
print(text1.most_common())
print(text1.unique_words())

stranger = Text.from_file('the_stranger.txt')

print(stranger.unique_words())
print(stranger.most_common())
print(stranger.frequency('stranger'))