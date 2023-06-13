// DATA MODEL

var gameBoard = ['', '', '', '', '', '', '', '', ''];
var checkWinsCounter = 0;
var playerOne;
var playerTwo;
var currentPlayer;

// QUERY SELECTORS

boxes = document.querySelectorAll('.box');
boardHeader = document.querySelector('.play-section-header');
gamePlaySection = document.querySelector('.play-section');
gridBoard = document.querySelector('.grid-board');
playerOneWins = document.querySelector('.player-one-wins');
playerTwoWins = document.querySelector('.player-two-wins');

// EVENT LISTENERS

window.addEventListener('load', startGame);

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function (e) {
    placeMove(e);
  });
}

// FUNCTIONS

function storePlayerInfo(id, token, startsFirst) {
  return {
    id: id,
    token: token,
    startsFirst: startsFirst,
    wins: 0,
    winIncreased: false
  };
}

function startGame() {
  createPlayer();
  currentPlayer = playerOne;
  displayPlayer();
}

function createPlayer() {
  playerOne = storePlayerInfo(1, '🥔', true);
  playerTwo = storePlayerInfo(2, '🍟', false);
}

function displayPlayer() {
  boardHeader.innerHTML = `<h3 class="player-emoji">Hey ${currentPlayer.token}, it's your turn!</h3>`;
  playerOneWins.innerHTML = `<h1 class="wins">${playerOne.wins} Wins</h1>`;
  playerTwoWins.innerHTML = `<h1 class="wins">${playerTwo.wins} Wins</h1>`;
}

function placeMove(e) {
  var gameBoardIndex = parseInt(e.target.getAttribute('id'));

  if (gameBoard[gameBoardIndex] === '') {
    gameBoard[gameBoardIndex] = currentPlayer.token;
  } else {
    return;
  }

  e.target.innerHTML += `<div class="player-emoji">${currentPlayer.token}</div>`;

  checkWinsCounter++;

  checkWins();
  if (!currentPlayer.winIncreased && checkWinsCounter < 9) {
    togglePlayer();
    displayPlayer();
  }
  checkDraws();
}

function togglePlayer() {
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
}

function toggleWhoStartsFirst() {
  if (currentPlayer.startsFirst) {
    currentPlayer.startsFirst = false;
    togglePlayer();
    currentPlayer.startsFirst = true;
  } else {
    currentPlayer.startsFirst = true;
    togglePlayer();
    currentPlayer.startsFirst = false;
    togglePlayer();
  }
}

function checkWins() {
  for (var i = 0; i < gameBoard.length; i++) {
    if (
      i === 0 &&
      gameBoard[i] !== '' &&
      gameBoard[i] === gameBoard[i + 1] &&
      gameBoard[i + 1] === gameBoard[i + 2]
    ) {
      executeAfterWin();
    }
    if (
      i === 0 &&
      gameBoard[i] !== '' &&
      gameBoard[i] === gameBoard[i + 3] &&
      gameBoard[i + 3] === gameBoard[i + 6]
    ) {
      executeAfterWin();
    }
    if (
      i === 0 &&
      gameBoard[i] !== '' &&
      gameBoard[i] === gameBoard[i + 4] &&
      gameBoard[i + 4] === gameBoard[i + 8]
    ) {
      executeAfterWin();
    }
    if (
      i === 1 &&
      gameBoard[i] !== '' &&
      gameBoard[i] === gameBoard[i + 3] &&
      gameBoard[i + 3] === gameBoard[i + 6]
    ) {
      executeAfterWin();
    }
    if (
      i === 2 &&
      gameBoard[i] !== '' &&
      gameBoard[i] === gameBoard[i + 2] &&
      gameBoard[i + 2] === gameBoard[i + 4]
    ) {
      executeAfterWin();
    }
    if (
      i === 2 &&
      gameBoard[i] !== '' &&
      gameBoard[i] === gameBoard[i + 3] &&
      gameBoard[i + 3] === gameBoard[i + 6]
    ) {
      executeAfterWin();
    }
    if (
      i === 3 &&
      gameBoard[i] !== '' &&
      gameBoard[i] === gameBoard[i + 1] &&
      gameBoard[i + 1] === gameBoard[i + 2]
    ) {
      executeAfterWin();
    }
    if (
      i === 6 &&
      gameBoard[i] !== '' &&
      gameBoard[i] === gameBoard[i + 1] &&
      gameBoard[i + 1] === gameBoard[i + 2]
    ) {
      executeAfterWin();
    }
  }
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function checkDraws() {
  if (!currentPlayer.winIncreased && checkWinsCounter === 9) {
    boardHeader.innerHTML = `<h3 class="player-emoji">Hey, it's a draw!</h3>`;
    toggleClass(gridBoard, 'disable-click');
    stopGame();
  }
}

function increaseWins() {
  currentPlayer.wins++;
  playerOneWins.innerHTML = `<h1 class="wins">${playerOne.wins} Wins</h1>`;
  playerTwoWins.innerHTML = `<h1 class="wins">${playerTwo.wins} Wins</h1>`;
}

function announceWin() {
  currentPlayer.winIncreased = true;
  boardHeader.innerHTML = `<h3 class="player-emoji">Hey ${currentPlayer.token}, you won!</h3>`;
}

function stopGame() {
  setTimeout(function () {
    toggleClass(gamePlaySection, 'obscure');
    setTimeout(reset, 1500);
  }, 2500);
}

function executeAfterWin() {
  increaseWins();
  announceWin();
  toggleClass(gridBoard, 'disable-click');
  stopGame();
  return;
}

function reset() {
  gameBoard.splice(0, gameBoard.length, '', '', '', '', '', '', '', '', '');
  currentPlayer.winIncreased = false;
  checkWinsCounter = 0;

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
  }

  toggleClass(gamePlaySection, 'obscure');
  toggleWhoStartsFirst();
  displayPlayer();
  toggleClass(gridBoard, 'disable-click');
}
