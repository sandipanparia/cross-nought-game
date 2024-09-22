let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;
const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');
const restartBtn = document.getElementById('restartBtn');

// Winning combinations for Tic-Tac-Toe
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cellIndex = event.target.getAttribute('data-index');

    if (board[cellIndex] === '' && isGameActive) {
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWin()) {
            statusDisplay.textContent = `Player ${currentPlayer} wins!`;
            isGameActive = false;
        } else if (board.includes('') === false) {
            statusDisplay.textContent = 'It\'s a tie!';
            isGameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => (cell.textContent = ''));
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);

statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
