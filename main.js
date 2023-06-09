// data model
var allPlayers = [];
var playerOne;
var playerTwo;

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
window.addEventListener('load', displayPlayer)

// for (var i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener("click", function (e) {
//     addSymbol(e);
//   });
// }

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function (e) {
    keepTrack(e);
  });
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

// function makePlayer() {
//   playerOne = storePlayerInfo(1, '🥔')
//   playerTwo = storePlayerInfo(2, '🍟')

//   allPlayers.push(playerOne)
//   allPlayers.push(playerTwo)
  
//   togglePlayer()
// }
// //console.log(allPlayers[0])

function displayPlayer() {
  playerOne = storePlayerInfo(1, '🥔')
  playerTwo = storePlayerInfo(2, '🍟')

  allPlayers.push(playerOne)
  allPlayers.push(playerTwo)

  // if (playerTurn === playerOne) {
    // boardHeader.innerHTML += `Hey ${playerOne.token}, it's your turn`
  // } else {
  //     boardHeader.innerHTML += `Hey ${playerTwo.token}, it's your turn`
  //   }
  togglePlayer()  
}

// function togglePlayer() {
//   if (boardHeader.classList.contains('player-emojis') {
//     boardHeader.classList.add('hidden');
//     boardHeader.classList.remove('hidden')

//   })
// }


// how do I do 'click' on box then togglePlayer?
function togglePlayer() {
  if (playerOne.isPlayerTurn) {
    boardHeader.innerHTML = `Hey ${playerOne.token}, it's your turn!`
  } else {
    boardHeader.innerHTML = `Hey ${playerTwo.token}, it's your turn!`
  }
}

function keepTrack(e) {
  if (playerOne.isPlayerTurn) {
    e.target.innerHTML += `<div class="player-one-emoji">🥔</div>`;
    playerOne.boxTargets.push(parseInt(e.target.getAttribute('id')));
  } else {
    e.target.innerHTML += `<div class="player-two-emoji">🍟</div>`;
    playerTwo.boxTargets.push(parseInt(e.target.getAttribute('id')));
  }
console.log('hello potato')
}


function increaseWins() {
  for (var i = 0; i < allPlayers.length; i++) {
    allPlayers[i].wins++;
  }
}
// update DOM


// function addSymbol(e) {
//   // for (var i = 0; i < boxes.length; i++){
//   //     if (e.target.classList.contains('box')) {
//   console.log(e.target);
//   e.target.innerHTML += `<div class="player-emojis">🥔</div>`;
//   //         }
//   //     }
// }


