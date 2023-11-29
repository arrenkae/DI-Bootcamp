matrix = [
    ['7','i','i'],
    ['T','s','x'],
    ['h','%','?',],
    ['i',' ','#'],
    ['s','M',' '],
    ['$','a',' '],
    ['#','t','%'],
    ['^','r','!']
]

message = ''
x = 0

while x < len(matrix[0]):
    y = 0
    while y < len(matrix):
        if y+1 != len(matrix):
            nextchar = matrix[y+1][x]
        elif x+1 != len(matrix[0]):
            nextchar = matrix[0][x+1]
        else:
            break
        if matrix[y][x].isalpha():
            message += matrix[y][x]
            if not nextchar.isalpha():
                message += ' '
        y += 1
    x += 1

print(message)