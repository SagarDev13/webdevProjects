// Factory function for players
const Player = (name, marker) => {
  return { name, marker };
};

// Gameboard module (IIFE)
const GameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setBoard = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, setBoard, reset };
})();

// Display controller
const DisplayController = (function () {
  const boxes = document.querySelectorAll(".box");
  const statusText = document.querySelector("#status");

  const render = () => {
    const board = GameBoard.getBoard();
    boxes.forEach((box, i) => {
      box.textContent = board[i];
    });
  };

  const setStatus = (message) => {
    statusText.textContent = message;
  };

  return { render, setStatus };
})();

// Game controller
const GameController = (function () {
  const player1 = Player("Ram", "X");
  const player2 = Player("Shyam", "O");
  let currentPlayer = player1;

  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      if (GameBoard.setBoard(index, currentPlayer.marker)) {
        DisplayController.render();

        if (checkWin(GameBoard.getBoard(), currentPlayer.marker)) {
          DisplayController.setStatus(`${currentPlayer.name} wins!`);
          return;
        }

        switchTurn();
      }
    });
  });

  const switchTurn = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    DisplayController.setStatus(`${currentPlayer.name}'s turn`);
  };

  const checkWin = (board, marker) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    return winPatterns.some(pattern =>
      pattern.every(index => board[index] === marker)
    );
  };

  return {};
})();
