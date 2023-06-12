// data model
var allPlayers = [];
var playerOne;
var playerTwo;
var currentPlayer;
var gameBoard = ['', '', '', '', '', '', '', '', '']
var checkWinsCounter = 0

// querySelectors
boxes = document.querySelectorAll(".box");;
boardHeader = document.querySelector('.play-section-header')
gamePlaySection = document.querySelector('.play-section')
gridBoard = document.querySelector('.grid-board');
playerOneWins = document.querySelector('.player-one-wins')
playerTwoWins = document.querySelector('.player-two-wins')

// eventListeners
window.addEventListener('load', startGame)

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function (e) {
    placeMove(e);
  });
}

// functions
function storePlayerInfo(id, token, startsFirst) {
  return {
    id: id,
    token: token, 
    // isPlayerTurn: true, 
    startsFirst: startsFirst || false,
    wins: 0,
    winIncreased: false,
    //disableClick: false,
    //boxTargets: []
  };
}

function startGame() {
  createPlayer();
  currentPlayer = playerOne;
  // playerOne.startFirst = true;
  // displayBoard();
  displayPlayer(); 
  // checkWins();
}

// updates Data Model:
function createPlayer() {
  playerOne = storePlayerInfo(1, '🥔', true)
  playerTwo = storePlayerInfo(2, '🍟')

  allPlayers.push(playerOne)
  allPlayers.push(playerTwo)
}

function displayPlayer() {
  boardHeader.innerHTML = `<h3 class="player-emoji">Hey ${currentPlayer.token}, it's your turn!</h3>`;
  playerOneWins.innerHTML = `<h1 class="wins">${playerOne.wins} Wins</h1>`;
  playerTwoWins.innerHTML = `<h1 class="wins">${playerTwo.wins} Wins</h1>`
}

function togglePlayer() {
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
  // displayPlayer()
}

function toggleWhoStartsFirst() {
  if (currentPlayer.startsFirst) {
    currentPlayer.startsFirst = false
    togglePlayer()
    currentPlayer.startsFirst = true
  } else {
    currentPlayer.startsFirst = true
    togglePlayer()
    currentPlayer.startsFirst = false
    togglePlayer()
  }
}

function placeMove(e) {
  var gameBoardIndex = parseInt(e.target.getAttribute('id'))
  if (gameBoard[gameBoardIndex] === '') {
    gameBoard[gameBoardIndex]= currentPlayer.token
    
    // parseInt(e.target.getAttribute('id'))
  } else {
    return 
  }

  e.target.innerHTML += `<div class="player-emoji">${currentPlayer.token}</div>` 
  
  checkWinsCounter++
  checkWins()  
  if (!currentPlayer.winIncreased && checkWinsCounter < 9) {
    togglePlayer()
    displayPlayer()
  }
  checkDraws() 
}

function checkWins() {
  for (var i = 0; i < gameBoard.length; i++) {
    if ((i === 0) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
     doAfterWin()
    }
    if ((i === 3) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
      doAfterWin()
    }
    if ((i === 6) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
      doAfterWin()
    }
    if ((i === 0) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+4]) && (gameBoard[i+4] === gameBoard[i+8])) {
      doAfterWin()
    }
    if ((i === 2) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+2]) && (gameBoard[i+2] === gameBoard[i+4])) {
      doAfterWin()
    }
    if ((i === 0) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+3]) && (gameBoard[i+3] === gameBoard[i+6])) {
      doAfterWin()
    }
    if ((i === 1) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+3]) && (gameBoard[i+3] === gameBoard[i+6])) {
      doAfterWin()
    }
    if ((i === 2) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+3]) && (gameBoard[i+3] === gameBoard[i+6])) {
      doAfterWin()
    }
  }
}

function checkDraws() {
  if (!currentPlayer.winIncreased && checkWinsCounter === 9) {
    boardHeader.innerHTML = `<h3 class="player-emoji">Hey, it's a draw</h3>`
    stopGame()
  }   
}

function increaseWins() {
  currentPlayer.wins++
  playerOneWins.innerHTML = `<h1 class="wins">${playerOne.wins} Wins</h1>`
  playerTwoWins.innerHTML = `<h1 class="wins">${playerTwo.wins} Wins</h1>`
}


function announceWin(){
  currentPlayer.winIncreased = true
  boardHeader.innerHTML = `<h3 class="player-emoji">Hey ${currentPlayer.token}, you won!</h3>`
}

function disableClicks() {
  gridBoard.classList.add('disable-click')
}

function enableClicks() {
  gridBoard.classList.remove('disable-click')
}

function stopGame() {
  setTimeout (function() {
    gamePlaySection.classList.add('obscure')
  setTimeout(reset, 1500)
  }, 2500)
}

function doAfterWin() {
  increaseWins();
  announceWin();
  disableClicks();
  stopGame();
  return
}

function reset() {
  gameBoard.splice(0, gameBoard.length, '', '', '', '', '', '', '', '', '')
  currentPlayer.winIncreased = false
  checkWinsCounter = 0

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ''
  }
  gamePlaySection.classList.remove('obscure')
  
  toggleWhoStartsFirst()
  displayPlayer() 
  enableClicks()
}
