// get value from input
function collectSudokuInput() {
    const sudokuBoard = [];
    for (let row = 0; row < 9; row++) {
        const rowData = [];
        for (let col = 0; col < 9; col++) {
            const cell = document.getElementById(`cell-${row}-${col}`);
            rowData.push(cell.value);
        }
        sudokuBoard.push(rowData);
    }
    console.log(sudokuBoard); //delete
    return sudokuBoard
}

function clearBoard(){
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.getElementById(`cell-${row}-${col}`);
            cell.value = '';
            cell.disabled = false;
            $(`#cell-${row}-${col}`).css('background-color', '#FFFFFF');

        }
    };
}

// create and append json object
function createJsonObj() {
    const ids = [];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (document.getElementById(`cell-${row}-${col}`).value !== '') {
                ids.push(`cell-${row}-${col}`);
            }
        }
    }
    console.log("id", ids); //delete  



    const sudokuBoard = collectSudokuInput()
    const jsonObj = {
        "sudoku_board": sudokuBoard
    }
    console.log(jsonObj); //delete

    // send a request to backend and update board with solved data
    $.ajax({
        type: "POST",
        url: "/solve_sudoku",
        data: JSON.stringify(jsonObj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log("Solved board received from server:", data);
            const solvedBoard = data.solved_board;
            console.log("test", solvedBoard); //delete

            // Update UI with solved board
            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    const cell = document.getElementById(`cell-${row}-${col}`);
                    cell.value = solvedBoard[row][col];
                }
            }
        }
    });

    // cells with initial values are highlighted, rest are in white, all disabled
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cellId = `cell-${row}-${col}`;
            const cell = document.getElementById(cellId);
            
            if (ids.includes(cellId)) {
                console.log(cell);
                $(`#${cellId}`).css('background-color', '#b4cffa');
                cell.disabled = true;
            }
            else {
                $(`#${cellId}`).css('background-color', '#FFFFFF');
                cell.disabled = true;
            }
        }
    }
}



// declare lastClickedCell outside of any function to maintain state
let lastClickedCell = null;
// if the second click is not on the same cell, the first cell should be reset to its original color
function handleCellClick(e) {
    const currentCell = e.target;
    
    // Only proceed if we clicked an input element
    if (currentCell.tagName === 'INPUT') {
        // If clicking a different cell than last time, reset the old cell
        if (lastClickedCell && lastClickedCell !== currentCell) {
            lastClickedCell.style.backgroundColor = '';
        }
        
        // Always set the current cell's color
        currentCell.style.backgroundColor = '#b4cffa';
        lastClickedCell = currentCell;
    }
}



// Set up the event listener once when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const cells = document.getElementById('cells');
    cells.addEventListener('click', handleCellClick);

});



