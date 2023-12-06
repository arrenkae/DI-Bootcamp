# Download this text file http://www.practicepython.org/assets/nameslist.txt and do the following steps

#     Read the file line by line
#     Read only the 5th line of the file
#     Read only the 5 first characters of the file
#     Read all the file and return it as a list of strings. Then split each word
#     Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
#     Append your first name at the end of the file
#     Append "SkyWalker" next to each first name "Luke"

with open('nameslist.txt', encoding='utf-8', mode='r+') as f:
    lines = f.readlines()
    print('Line by line:', ''.join(lines))
    print('5th line:', lines[4])
    print('5 chars:', lines[0][:5])
    splitwords = []
    for word in lines:
        splitwords.append(list(word)[:-1])
    print(splitwords)
    print('Darth count:', ''.join(lines).count('Darth'))
    print('Luke count:', ''.join(lines).count('Luke'))
    print('Luke count:', ''.join(lines).count('Lea'))
    lines.append('\nNadia')
    for i in range(len(lines)):
        if lines[i] == 'Luke\n':
            lines[i] = 'Luke Skywalker\n'
    
with open('nameslist.txt', encoding='utf-8', mode='w') as f:
    f.writelines(lines)