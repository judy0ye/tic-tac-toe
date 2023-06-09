// data model
var allPlayers = [];
var playerOne;
var playerTwo;
var currentPlayer;

// querySelectors
// boxOne = document.querySelector('#one')
// boxTwo = document.querySelector('#two')
// boxThree = document.querySelector('#three')
// boxFour = document.querySelector('#four')
boxes = document.querySelectorAll(".box");
boardHeader = document.querySelector('.play-section-header')

// eventListeners
// boxOne.addEventListener('click', addSymbol)
// boxTwo.addEventListener('click', addSymbol)
// boxThree.addEventListener('click', addSymbol)
window.addEventListener('load', startGame)

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function (e) {
    keepTrack(e);
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
    isPlayerTurn: true,
    wins: 0,
    boxTargets: []
  };
}

function startGame() {
  createPlayer();
  currentPlayer = playerOne
  displayPlayer(); 
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
  console.log('showing player')
  //check which player goes
  if (currentPlayer === playerOne) {
    boardHeader.innerHTML = `<h3 class="player-one-head">Hey ${playerOne.token}, it's your turn!</h3>`
    // after click, go to other player
    //boardHeader.firstElementChild.classList.remove('player-two-head')
  } 
  // how to update DOM?
  if (currentPlayer === playerTwo) {
    boardHeader.innerHTML = `<h3 class="player-two-head">Hey ${playerTwo.token}, it's your turn!<h3>`
  }
  //togglePlayer()
  // can't use keepTrack it throws an undefined for target
}

// function togglePlayer() {
//   // for (var i = 0; i < allPlayers.length; i++) {
//   //   // if currentPlayer clicked make isPlayerTurn false
//   //   allPlayers[i].isPlayerTurn = !allPlayers[i].isPlayerTurn
//   // }
//   playerOne.isPlayerTurn = !playerOne.isPlayerTurn
// }

function keepTrack(e) {
  if (currentPlayer === playerOne) {
    e.target.innerHTML += `<div class="player-one-emoji">🥔</div>`;
    playerOne.boxTargets.push(parseInt(e.target.getAttribute('id')));
    // change player
    //playerOne.isPlayerTurn = false
    // //console.log('whose turn:', !playerOne.isPlayerTurn)
    //playerTwo.isPlayerTurn = true
    // //console.log('P2:', playerTwo.isPlayerTurn)
  }
  if (currentPlayer === playerTwo) {
    e.target.innerHTML += `<div class="player-two-emoji">🍟</div>`;
    playerTwo.boxTargets.push(parseInt(e.target.getAttribute('id')));
    // playerTwo.isPlayerTurn = false
    // playerOne.isPlayerTurn = true
  }
  togglePlayer()
}

// make Toggle do: isPlayerTurn = !isPlayerTurn
// isPlayerTurn ? true : !isPlayerTurn
function togglePlayer() {
  //if currentPlayer is playerOne, make it playerTwo
  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
}

function increaseWins() {
  for (var i = 0; i < allPlayers.length; i++) {
    allPlayers[i].wins++;
  }
}
// update DOM




