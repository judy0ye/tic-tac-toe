// data model
var allPlayers = [];
var playerOne;
var playerTwo;
var currentPlayer;
var gameBoard = ['', '', '', '', '', '', '', '', '']

// querySelectors
boxes = document.querySelectorAll(".box");;
boardHeader = document.querySelector('.play-section-header')
gamePlaySection = document.querySelector('.play-section')
gridBoard = document.querySelector('.grid-board');
playerOneWins = document.querySelector('.player-one-wins')
playerTwoWins = document.querySelector('.player-two-wins')

// eventListeners
// boxOne.addEventListener('click', addSymbol)
// boxTwo.addEventListener('click', addSymbol)
// boxThree.addEventListener('click', addSymbol)
window.addEventListener('load', startGame)

// for (var i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener('click', function (e) {
//     placeMove(e);
//   }, {once: true});
// }

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function (e) {
    placeMove(e);
  });
}

// for (var i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener('reset', startGame);
// }

// for (var i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener('click', function removeAfterReset(e) {
//     placeMove(e);
//     if(currentPlayer.increaseWins) {
//       reset()
//       e.target.removeEventListener('click', removeAfterReset)
//     }
//   }, {once: true});
// }

// functions
function storePlayerInfo(id, token) {
  return {
    id: id,
    token: token, 
    // isPlayerTurn: true,
    wins: 0,
    winIncreased: false,
    disableClick: false,
    //boxTargets: []
  };
}

function startGame() {
  createPlayer();
  currentPlayer = playerOne
  // displayBoard();
  displayPlayer(); 
  // checkWins();
}


// updates Data Model:
function createPlayer() {
  playerOne = storePlayerInfo(1, '🥔')
  playerTwo = storePlayerInfo(2, '🍟')

  allPlayers.push(playerOne)
  allPlayers.push(playerTwo)
}

function displayPlayer() {
  boardHeader.innerHTML = `<h3 class="player-emoji">Hey ${currentPlayer.token}, it's your turn!</h3>`;
  playerOneWins.innerHTML = `<h1 class="wins">${playerOne.wins} Wins</h1>`;
  playerTwoWins.innerHTML = `<h1 class="wins">${playerTwo.wins} Wins</h1>`
}

// function clearPlayerHeader() {
//   boardHeader.innerHTML = ''
// }

function togglePlayer() {
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
  displayPlayer()
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
  
  checkWins()  
  if (!currentPlayer.winIncreased) {
    togglePlayer()
  } 
}

function checkWins() {
  for (var i = 0; i < gameBoard.length; i++) {
    if ((i === 0) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
      increaseWins();
      announceWin();
      disableClicks();
      stopGame()
      return
    }
    if ((i === 3) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
      increaseWins();
      announceWin();
      disableClicks();
      return
    }
    if ((i === 6) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
      increaseWins();
      announceWin();
      disableClicks();
      return
    }
    if ((i === 0) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+4]) && (gameBoard[i+4] === gameBoard[i+8])) {
      increaseWins();
      announceWin();
      disableClicks();
      return
    }
    if ((i === 2) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+2]) && (gameBoard[i+2] === gameBoard[i+4])) {
      increaseWins();
      announceWin();
      disableClicks();
      return
    }
    if ((i === 0) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+3]) && (gameBoard[i+3] === gameBoard[i+6])) {
      increaseWins();
      announceWin();
      disableClicks();
      return
    }
    if ((i === 1) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+3]) && (gameBoard[i+3] === gameBoard[i+6])) {
      increaseWins();
      announceWin();
      disableClicks();
      return
    }
    if ((i === 2) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+3]) && (gameBoard[i+3] === gameBoard[i+6])) {
      increaseWins();
      announceWin();
      disableClicks();
      return
    }
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
  if (currentPlayer.winIncreased) {
    togglePlayer()
    gridBoard.classList.remove('disable-click')
  }
}

function stopGame() {
  setTimeout (function() {
    gamePlaySection.classList.add('obscure')
  setTimeout(reset, 1500)
  }, 2500)
}

function reset() {
  gameBoard.splice(0, gameBoard.length, '', '', '', '', '', '', '', '', '')
  
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ''
  }
  gamePlaySection.classList.remove('obscure')
  currentPlayer.winIncreased = false
  togglePlayer()
  gridBoard.classList.remove('disable-click')
}

