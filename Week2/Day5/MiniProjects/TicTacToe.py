# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

def display_board(board):
    print('TIC TAC TOE')
    print('TIC TAC TOE\n*****************')
    for row in board:
        display_row = ''
        for cell in row:
            display_row += (' ' + cell + ' |')
        print(f'* |{display_row} *')
        print('* |---|---|---| *')
    print('*****************')

def player_input(player):
    print(f'{player}\'s turn...')
    while True:
        row = int(input('Enter row: '))-1
        if row not in range(0,3):
            print('There are only 3 rows!')
        else:
            break
    while True:
        col = int(input('Enter column: '))-1
        if row not in range(0,3):
            print('There are only 3 columns!')
        else:
            break
    return(row, col)

def check_win(board, x, y, char):
    if ' ' not in [cell for row in board for cell in row]:
        print('Nobody won. Game over!')
        return True
    elif board[x][0] == board[x][1] == board[x][2] == char or board[0][y] == board[1][y] == board[2][y] == char or board[0][0] == board[1][1] == board[2][2] == char or board[0][2] == board[1][1] == board[2][0] == char:
        print(f'Player {char} won!')
        return True
    else:
        return False
        
def play():
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]
    print('Welcome to TIC TAC TOE!')
    while True:
        display_board(board)
        while True:
            row, col = player_input('X')
            if board[row][col] != ' ':
                print('Already taken!')
            else:
                break
        board[row][col] = 'X'
        display_board(board)
        if check_win(board, row, col, 'X'):
            break
        while True:
            row, col = player_input('O')
            if board[row][col] != ' ':
                print('Already taken!')
            else:
                break
        board[row][col] = 'O'
        display_board(board)
        if check_win(board, row, col, 'O'):
            break

play()