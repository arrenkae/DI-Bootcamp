# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

user_word = input('Give me a word: ')
word_dict = {}

for letter in user_word:
    if letter not in word_dict:
        index_list = [i for i, j in enumerate(user_word) if j == letter]
        word_dict[letter] = index_list

print(word_dict)

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.

store_items =  {
    "Bread": "$3",
    "Pizza": "$5",
    "Cat food": "$10",
    "Phone": "$1,000",
    "Wine": "$50"
}

wallet = "$25"
remaining_funds = int(wallet.replace('$','').replace(',',''))
can_buy = []

for item, price in store_items.items():
    if int(price.replace('$','').replace(',','')) <= remaining_funds:
        can_buy.append(item)
        remaining_funds -= int(price.replace('$','').replace(',',''))

if not can_buy:
    print('Nothing')
else:
    print(can_buy)