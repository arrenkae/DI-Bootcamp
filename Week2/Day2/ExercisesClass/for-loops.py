# students = ['Lior', 'Sveta', 'Estee', 'David']

# for s in students:
#     if s is 'Sveta':
#         print(f'Happy birthday, {s}')
#     else:
#         print(f'Hello, {s}')


# for i in range(1,11,2):
#     print(i)

# for i in range(10):
#     print(i)

# some_list = list(range(1,11))
# print(some_list)

# print(sum(some_list))

# result = 0
#     for i in some_list:
#         result += 1

# print(result)

user_str = input('Give a 10 chars word: ')
while len(user_str) != 10:
    user_str = input('Give another word: ')
    if user_str == 'stop':
        print('If you say so')
        break
else:
    print('Perfect word!')