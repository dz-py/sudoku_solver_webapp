# Sudoku Solver

A web-based Sudoku solver application that allows users to input Sudoku puzzles and automatically solves them using a backtracking algorithm. The application features a clean, intuitive interface with a responsive grid layout and real-time input validation (WIP).

## Features

- Interactive 9x9 Sudoku grid
- Real-time input validation for numbers 1-9
- Visual feedback for initial input values 
- Automatic solving using backtracking algorithm
- Clear board functionality
- Responsive design
- Cell highlighting on interaction

## Technologies Used

- Frontend:
  - HTML5
  - CSS3
  - JavaScript
  - jQuery 1.5
- Backend:
  - Python
  - Flask
  - Flask-RESTful

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dz-py/sudoku-solver.git
cd sudoku-solver
```

2. Create and activate a virtual environment:

For Windows:
```bash
python3 -m venv venv
venv\Scripts\activate
```

For macOS/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

3. Install the required Python packages:
```bash
pip install -r requirements.txt
```

4. Run the application:
```bash
python3 app.py
```

5. Open your web browser and navigate to:
```
http://localhost:4999
```

To deactivate the virtual environment when you're done:
```bash
deactivate
```
## How to Use

1. Enter numbers (1-9) in the Sudoku grid cells to set up your puzzle
2. Click "Solve" to find the solution
   - Initial values will be highlighted in light blue
   - Solved values will appear in white cells
3. Click "Clear" to reset the board and start over

## Technical Details

### Frontend
- Responsive grid layout using flexbox
- Input validation for numbers 1-9 
- Dynamic cell highlighting
- AJAX calls for server communication
- JSON data handling

### Backend
- RESTful API endpoint for solving Sudoku
- Backtracking algorithm implementation 
- Board state management
- Input cleaning and validation

## API Endpoints

### POST /solve_sudoku
Solves the provided Sudoku puzzle.

Request body:
```json
{
    "sudoku_board": [[...], [...], ...]  // 9x9 array of numbers/empty strings
}
```

Response:
```json
{
    "solved_board": [[...], [...], ...]  // 9x9 array of solved numbers
}
```

## License
This project is open source and available under the [MIT License](LICENSE).
