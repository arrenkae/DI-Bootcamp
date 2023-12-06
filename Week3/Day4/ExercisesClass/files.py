# opening a flie

# f = open('example.txt') - old-fashioned way
# f.readlines()
# f.close()

# with open('example.txt', encoding='utf-8', mode='r') as f: #saving into variable
#     original_text = f.read()
#     print(original_text)

#writing in the file

# with open('example.txt', encoding='utf-8', mode='r+') as f:
#     my_line = '\nHELLO TESTING'
#     f.write(my_line)

def read_and_write(file_name, text_add):
    with open(file_name, encoding='utf-8', mode='r+') as f:
        f.read()
        f.write('\n'+text_add)

read_and_write('example.txt', 'HELLO TESTING from function')
