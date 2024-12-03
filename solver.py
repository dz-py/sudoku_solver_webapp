def clean_board(board):
    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == '':
                board[i][j] = 0
            else:
                board[i][j] = int(board[i][j])
    return board  # Return the cleaned board

def find_empty(board):
    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == 0:
                return i, j
    return None

def is_valid(board, num, pos):
    row, col = pos

    # Check Row and Column
    if num in board[row] or num in [board[i][col] for i in range(len(board))]:
        return False

    # Check 3x3 Grid
    x_grid, y_grid = (row // 3) * 3, (col // 3) * 3
    for i in range(3):
        for j in range(3):
            if board[x_grid + i][y_grid + j] == num:
                return False

    return True

def solve(board):
    pos = find_empty(board)
    if pos is None:
        return board  # Return the board when solved

    row, col = pos
    for num in range(1, 10):
        if is_valid(board, num, pos):
            board[row][col] = num
            result = solve(board)
            if result:  # If solve() returns the board (not False)
                return result  # Return the solved board
            board[row][col] = 0  # Reset and backtrack

    return False  # Return False if no solution is found
