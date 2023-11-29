# Wallet exercise

# store_items_1 =  {
#     "Bread": "$3",
#     "Pizza": "$5",
#     "Cat food": "$10",
#     "Phone": "$1,000",
#     "Wine": "$50"
# }

# wallet_1 = "$25"

# store_items_2 = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet_2 = "$100" 

# store_items_3 = items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet_3 = "$1" 

# def can_afford(store_items:dict, wallet:str) -> None:
#     '''A function that checks a dictionary of items and prices to give you a list of what you can afford.
#     Arguments = store_items, wallet'''

#     remaining_funds = int(wallet.replace('$','').replace(',',''))
#     can_buy = []
#     for item, price in store_items.items():
#         if int(price.replace('$','').replace(',','')) <= remaining_funds:
#             can_buy.append(item)
#             remaining_funds -= int(price.replace('$','').replace(',',''))

#     if not can_buy:
#         print(f'You can\'t afford anything')
#     else:
#         print(f'You can afford {", ".join(can_buy)} and you\'ll have ${remaining_funds} remaining')

# can_afford(store_items_1, wallet_1)
# can_afford(store_items_2, wallet_2)
# can_afford(store_items_3, wallet_3)

# FUNCTIONS

# username = 'Rick'
# language = 'RU'

# def say_hello(username = 'Summer', language = 'EN'):
#     if language == 'EN':
#         print('Hello ' + username)
#     elif language == 'FR':
#         print('Bonjour ' + username)
#     elif language == 'RU':
#         print('Privet ' + username)
#     else:
#         print('This language is not supported')

# say_hello(username, language) #variable arguments
# say_hello('Rick', 'FR')
# say_hello(username='Rick', language='EN') #keyword arguments
# say_hello('Rick', language='RU')
# say_hello('Morty')
# say_hello()

# Local Scope

# def greet_day(name, day):
#     sentence = f'Hello {name}! Today is {day}'
#     print(sentence)

# # print(name) - local scope, doesn't work
# # print(sentence) - also doesn't work

# greet_day('Nadia', 'Wednesday')

# name = 'Juliana'

# greet_day(name, 'Sunday')

# Return variables

# def shout(message):
#     return message.upper()

# print(shout('Have a good day'))


# def square(number:int) -> int:
#     number_squared = number**2
#     return number_squared

# print(square(2))


def country_info(country):
    if country == 'Israel':
        population = 936400
        capital = 'Jerusalem'
    if country == 'Russia':
        population - 1434000000
        capital = 'Moscow'
    if country == 'Brazil':
        population = 2143000000
        capital = 'Brasilia'
    return (population, capital)


print(country_info('Israel')[0])