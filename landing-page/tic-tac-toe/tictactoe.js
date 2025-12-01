// Game state variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let gameMode = 'player'; // 'player' or 'ai'
let aiDifficulty = 'medium'; // 'easy', 'medium', 'hard'

// Score tracking
let scores = {
  X: 0,
  O: 0,
  draws: 0
};

// Winning combinations
const winPatterns = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6]  // Diagonal top-right to bottom-left
];

// Get all the elements
const cells = document.querySelectorAll('.cell');
const turnIndicator = document.getElementById('turnIndicator');
const gameMessage = document.getElementById('gameMessage');
const messageText = document.getElementById('messageText');
const messageIcon = document.getElementById('messageIcon');
const playAgainBtn = document.getElementById('playAgainBtn');
const resetBtn = document.getElementById('resetBtn');
const clearScoresBtn = document.getElementById('clearScoresBtn');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
const scoreDraw = document.getElementById('scoreDraw');
const playerOLabel = document.getElementById('playerOLabel');
const difficultySection = document.getElementById('difficultySection');

// Mode and difficulty buttons
const modeButtons = document.querySelectorAll('.mode-btn');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');

// Start the game
startGame();

// Set up all event listeners
function startGame() {
  // Cell clicks
  cells.forEach(function(cell) {
    cell.addEventListener('click', handleCellClick);
  });
  
  // Button clicks
  playAgainBtn.addEventListener('click', resetGame);
  resetBtn.addEventListener('click', resetGame);
  clearScoresBtn.addEventListener('click', clearScores);
  
  // Mode selection
  modeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      gameMode = btn.getAttribute('data-mode');
      
      // Update active button
      modeButtons.forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      
      // Show/hide difficulty and update label
      if (gameMode === 'ai') {
        difficultySection.classList.remove('hidden');
        playerOLabel.textContent = 'AI';
      } else {
        difficultySection.classList.add('hidden');
        playerOLabel.textContent = 'Player O';
      }
      
      resetGame();
    });
  });
  
  // Difficulty selection
  difficultyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      aiDifficulty = btn.getAttribute('data-difficulty');
      
      // Update active button
      difficultyButtons.forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      
      resetGame();
    });
  });
  
  // Load scores
  loadScores();
  updateScoreDisplay();
}

// Handle cell click
function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = cell.getAttribute('data-index');
  
  // Check if cell is taken or game is over
  if (gameBoard[cellIndex] !== '' || !gameActive) {
    return;
  }
  
  // Make the move
  makeMove(cell, cellIndex);
  
  // If AI mode and game is still active, let AI make a move
  if (gameMode === 'ai' && gameActive && currentPlayer === 'O') {
    // Small delay so AI doesn't move instantly
    setTimeout(makeAIMove, 500);
  }
}

// Make a move
function makeMove(cell, index) {
  gameBoard[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add('taken');
  cell.classList.add(currentPlayer.toLowerCase());
  
  checkResult();
}

// AI makes a move
function makeAIMove() {
  let moveIndex;
  
  if (aiDifficulty === 'easy') {
    moveIndex = getEasyMove();
  } else if (aiDifficulty === 'medium') {
    moveIndex = getMediumMove();
  } else {
    moveIndex = getHardMove();
  }
  
  const cell = cells[moveIndex];
  makeMove(cell, moveIndex);
}

// Easy AI - Random move
function getEasyMove() {
  const availableCells = [];
  
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      availableCells.push(i);
    }
  }
  
  const randomIndex = Math.floor(Math.random() * availableCells.length);
  return availableCells[randomIndex];
}

// Medium AI - Block wins and take obvious victories
function getMediumMove() {
  // First, check if AI can win
  for (let i = 0; i < winPatterns.length; i++) {
    const pattern = winPatterns[i];
    const line = [gameBoard[pattern[0]], gameBoard[pattern[1]], gameBoard[pattern[2]]];
    
    // Count O's and empty cells
    let oCount = 0;
    let emptyIndex = -1;
    
    for (let j = 0; j < 3; j++) {
      if (line[j] === 'O') {
        oCount++;
      } else if (line[j] === '') {
        emptyIndex = pattern[j];
      }
    }
    
    // If AI has 2 in a row and third is empty, take it
    if (oCount === 2 && emptyIndex !== -1) {
      return emptyIndex;
    }
  }
  
  // Second, check if player can win and block them
  for (let i = 0; i < winPatterns.length; i++) {
    const pattern = winPatterns[i];
    const line = [gameBoard[pattern[0]], gameBoard[pattern[1]], gameBoard[pattern[2]]];
    
    let xCount = 0;
    let emptyIndex = -1;
    
    for (let j = 0; j < 3; j++) {
      if (line[j] === 'X') {
        xCount++;
      } else if (line[j] === '') {
        emptyIndex = pattern[j];
      }
    }
    
    // If player has 2 in a row, block it
    if (xCount === 2 && emptyIndex !== -1) {
      return emptyIndex;
    }
  }
  
  // Otherwise, make a random move
  return getEasyMove();
}

// Hard AI - Minimax algorithm (unbeatable)
function getHardMove() {
  let bestScore = -Infinity;
  let bestMove = -1;
  
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      gameBoard[i] = 'O';
      const score = minimax(gameBoard, 0, false);
      gameBoard[i] = '';
      
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  
  return bestMove;
}

// Minimax algorithm
function minimax(board, depth, isMaximizing) {
  const winner = checkWinnerForMinimax(board);
  
  if (winner === 'O') {
    return 10 - depth;
  }
  if (winner === 'X') {
    return depth - 10;
  }
  if (checkDrawForMinimax(board)) {
    return 0;
  }
  
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = 'O';
        const score = minimax(board, depth + 1, false);
        board[i] = '';
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = 'X';
        const score = minimax(board, depth + 1, true);
        board[i] = '';
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

// Check winner for minimax
function checkWinnerForMinimax(board) {
  for (let i = 0; i < winPatterns.length; i++) {
    const pattern = winPatterns[i];
    const a = board[pattern[0]];
    const b = board[pattern[1]];
    const c = board[pattern[2]];
    
    if (a !== '' && a === b && b === c) {
      return a;
    }
  }
  return null;
}

// Check draw for minimax
function checkDrawForMinimax(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      return false;
    }
  }
  return true;
}

// Check game result
function checkResult() {
  let roundWon = false;
  let winningCells = [];
  
  // Check for winner
  for (let i = 0; i < winPatterns.length; i++) {
    const pattern = winPatterns[i];
    const a = gameBoard[pattern[0]];
    const b = gameBoard[pattern[1]];
    const c = gameBoard[pattern[2]];
    
    if (a === '' || b === '' || c === '') {
      continue;
    }
    
    if (a === b && b === c) {
      roundWon = true;
      winningCells = pattern;
      break;
    }
  }
  
  if (roundWon) {
    // Highlight winning cells
    winningCells.forEach(function(index) {
      cells[index].classList.add('winner');
    });
    
    gameActive = false;
    
    // Show winner message with appropriate icon
    if (currentPlayer === 'X') {
      messageIcon.textContent = '🎉';
      showMessage('Player X Wins!');
    } else {
      if (gameMode === 'ai') {
        messageIcon.textContent = '🤖';
        showMessage('AI Wins!');
      } else {
        messageIcon.textContent = '🎉';
        showMessage('Player O Wins!');
      }
    }
    
    updateScore(currentPlayer);
    return;
  }
  
  // Check for draw
  let boardFilled = true;
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      boardFilled = false;
      break;
    }
  }
  
  if (boardFilled) {
    gameActive = false;
    messageIcon.textContent = '🤝';
    showMessage("It's a Draw!");
    updateScore('draw');
    return;
  }
  
  // Switch player
  switchPlayer();
}

// Switch player
function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  
  if (gameMode === 'ai') {
    if (currentPlayer === 'X') {
      turnIndicator.textContent = "Player X's Turn";
    } else {
      turnIndicator.textContent = "AI's Turn";
    }
  } else {
    turnIndicator.textContent = 'Player ' + currentPlayer + "'s Turn";
  }
}

// Show message
function showMessage(message) {
  messageText.textContent = message;
  gameMessage.classList.remove('hidden');
}

// Hide message
function hideMessage() {
  gameMessage.classList.add('hidden');
}

// Update score
function updateScore(winner) {
  if (winner === 'X') {
    scores.X = scores.X + 1;
  } else if (winner === 'O') {
    scores.O = scores.O + 1;
  } else if (winner === 'draw') {
    scores.draws = scores.draws + 1;
  }
  
  saveScores();
  updateScoreDisplay();
}

// Update score display
function updateScoreDisplay() {
  scoreX.textContent = scores.X;
  scoreO.textContent = scores.O;
  scoreDraw.textContent = scores.draws;
}

// Save scores
function saveScores() {
  localStorage.setItem('tictactoe_scores', JSON.stringify(scores));
}

// Load scores
function loadScores() {
  const savedScores = localStorage.getItem('tictactoe_scores');
  if (savedScores) {
    scores = JSON.parse(savedScores);
  }
}

// Clear scores
function clearScores() {
  scores = {
    X: 0,
    O: 0,
    draws: 0
  };
  saveScores();
  updateScoreDisplay();
}

// Reset game
function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  
  cells.forEach(function(cell) {
    cell.textContent = '';
    cell.classList.remove('taken', 'x', 'o', 'winner');
  });
  
  turnIndicator.textContent = "Player X's Turn";
  hideMessage();
}