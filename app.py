from flask import Flask, render_template, request, jsonify
from flask_restful import Api
import json

import solver

  
app = Flask(__name__, template_folder='templates', static_folder='static') 
api = Api(app)


# creates an endpoint for requests
@app.route('/')     
def index():  
    return render_template('index.html')


@app.route('/solve_sudoku', methods=['POST'])
def solve_sudoku():
    output = request.get_json() #this method recieves json data from the frontend and turns it into a python dictionary
    print(output) 
    print(type(output)) 
    sudoku_board = output.get("sudoku_board", [])
    print(sudoku_board) #this is the sudoku board you use to solve the sudoku

    cleaned_board = solver.clean_board(sudoku_board)
    solved_board = solver.solve(cleaned_board)

    return jsonify({"solved_board": solved_board}) #this method sends a response back to the frontend in json format

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4999)



