// data model
var allPlayers = [];
var playerOne;
var playerTwo;
var currentPlayer;
var gameBoard = 
['', '', '', 
'', '', '', 
'', '', '']


var winningCombos = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9], 
  [1, 4, 7], 
  [2, 5, 8], 
  [3, 6, 9],
  [3, 5, 7], 
  [1, 5, 9]
]

// querySelectors
boxes = document.querySelectorAll(".box");;
boardHeader = document.querySelector('.play-section-header')
gridBoard = document.querySelector('.grid-board');
playerOneWins = document.querySelector('.player-one-wins')
playerTwoWins = document.querySelector('.player-two-wins')

// eventListeners
// boxOne.addEventListener('click', addSymbol)
// boxTwo.addEventListener('click', addSymbol)
// boxThree.addEventListener('click', addSymbol)
window.addEventListener('load', startGame)

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function (e) {
    placeMove(e);
  }, {once: true});
}


// idk what these are
  // after page shows a payer won:
// setTimeout(doSomething, 5000)
  //doSomething= after potato or fries win

// function doSomething() {
//   if (boardHeader.innerHTML.includes('🥔')) {

//   }
// }

// functions
function storePlayerInfo(id, token) {
  return {
    id: id,
    token: token, 
    // isPlayerTurn: true,
    wins: 0,
    winIncreased: false,
    boxTargets: []
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


// how do I do 'click' on box then togglePlayer?
  // eventListener on boxes, click, hide player[i].isPlayerTurn or remove
  // make isPlayerTurn false
function displayPlayer() {
  boardHeader.innerHTML = `<h3 class="player-emoji">Hey ${currentPlayer.token}, it's your turn!</h3>`;
  playerOneWins.innerHTML = `<h1 class="wins">${playerOne.wins} Wins</h1>`;
  playerTwoWins.innerHTML = `<h1 class="wins">${playerTwo.wins} Wins</h1>`
}

function clearPlayerHeader() {
  boardHeader.innerHTML = ''
}
// function keepTrack(e) {
//   if (currentPlayer === playerOne) {
//     e.target.innerHTML += `<div class="player-one-emoji">🥔</div>`;
//     playerOne.boxTargets.push(parseInt(e.target.getAttribute('id')));
//   }
//   if (currentPlayer === playerTwo) {
//     e.target.innerHTML += `<div class="player-two-emoji">🍟</div>`;
//     playerTwo.boxTargets.push(parseInt(e.target.getAttribute('id')));
//   }
//   togglePlayer()
// }

function togglePlayer() {
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
  displayPlayer()
}

// function checkWins() {
//   console.log('potatooo')
//   for (var i = 0; i < winningCombos.length; i++) {
//     for (var j = 0; j < winningCombos[i].length; j++) {
//       for (var k = 0; k < allPlayers.length; k++) {       
//         if (allPlayers[k].boxTargets.includes(winningCombos[i][j])) {
//           increaseWins()
//         }
//       }
//     }
//   }
// }

function placeMove(e) {
  var gameBoardIndex = parseInt(e.target.getAttribute('id'))
  if (gameBoard[gameBoardIndex] === '') {
    gameBoard[gameBoardIndex]= currentPlayer.token
    // parseInt(e.target.getAttribute('id'))
  } else {
    return 
  }

  e.target.innerHTML += `<div class="player-emoji">${currentPlayer.token}</div>` 

  // if (currentPlayer === playerOne) {
  //   e.target.innerHTML += `<div class="player-one-emoji">🥔</div>` 
  // }
  // if (currentPlayer === playerTwo) {
  //   e.target.innerHTML += `<div class="player-two-emoji">🍟</div>` 
  // }
  currentPlayer.boxTargets.push(parseInt(e.target.getAttribute('id')));
  
  checkWins()  
  if (!currentPlayer.winIncreased) {
    console.log(currentPlayer.winIncreased)
    togglePlayer()
  } 
}

// function checkWins() {
//   for (var i =0; i < gameBoard.length; i++) {
//     if (gameBoard[i] === playerOne.token && gameBoard[i+1] === playerOne.token
//       && gameBoard[i+2] === playerOne.token) {
       
//         playerOne.wins++
      
//     }  
//   }  
// }

function checkWins() {
  for (var i = 0; i < gameBoard.length; i++) {
    if ((i === 0) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
      increaseWins();
      announceWin()
      return
    }
    if ((i === 3) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
      increaseWins();
      announceWin()
      return
    }
    if ((i === 6) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
      increaseWins();
      announceWin()
      return
    }
    if ((i === 0) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+4]) && (gameBoard[i+4] === gameBoard[i+8])) {
      increaseWins();
      announceWin()
      return
    }
    if ((i === 2) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+2]) && (gameBoard[i+2] === gameBoard[i+4])) {
      increaseWins();
      announceWin()
      return
    }
    if ((i === 0) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+3]) && (gameBoard[i+3] === gameBoard[i+6])) {
      increaseWins();
      announceWin()
      return
    }
    if ((i === 1) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+3]) && (gameBoard[i+3] === gameBoard[i+6])) {
      increaseWins();
      announceWin()
      return
    }
    if ((i === 2) && (gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+3]) && (gameBoard[i+3] === gameBoard[i+6])) {
      increaseWins();
      announceWin()
      return
    }
    // if ((gameBoard[i] !== '') && (gameBoard[i] === gameBoard[i+1]) && (gameBoard[i+1] === gameBoard[i+2])) {
    //   console.log('yaaaa')
    //   increaseWins()
    // }
    // if ((gameBoard[i] === gameBoard[i+1] && gameBoard[i] !== '') && (gameBoard[i+1] === gameBoard[i+2])) {
      
    //   console.log('yaaaa')
    
    
    // }
  }
}
function increaseWins() {
  // for (var i = 0; i < allPlayers.length; i++) {
  //   allPlayers[i].wins++;
  // }
  //playerOne.wins++
  currentPlayer.wins++
  playerOneWins.innerHTML = `<h1 class="wins">${playerOne.wins} Wins</h1>`
  playerTwoWins.innerHTML = `<h1 class="wins">${playerTwo.wins} Wins</h1>`
  //return playerOne
}
// update DOM

function announceWin(){
  currentPlayer.winIncreased = true
  boardHeader.innerHTML = `<h3 class="player-emoji">Hey ${currentPlayer.token}, you won!</h3>`
}

function stopGame() {
  // if currentPlayer.winIncrested is true, disable click
}
