// data model
var allPlayers = [];
var playerOne;
var playerTwo;

// querySelectors
boxOne = document.querySelector('#one')
boxTwo = document.querySelector('#two')
boxThree = document.querySelector('#three')
boxFour = document.querySelector('#four')
boxes = document.querySelectorAll(".box");
boardHeader = document.querySelector('.play-section-header')

// eventListeners
// boxOne.addEventListener('click', addSymbol)
// boxTwo.addEventListener('click', addSymbol)
// boxThree.addEventListener('click', addSymbol)
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function (e) {
    addSymbol(e);
  });
}

window.addEventListener('load', displayPlayer)

// functions
function storePlayerInfo(id, token) {
  return {
    id: id,
    token: token,
    wins: 0,
  };
}

function displayPlayer() {
  playerOne = storePlayerInfo(1, '🥔')
  playerTwo = storePlayerInfo(2, '🍟')

  allPlayers.push(playerOne)
  allPlayers.push(playerTwo)

  boardHeader.innerHTML += `Hey ${playerOne.token}, it's your turn`
  boardHeader.innerHTML += `Hey ${playerTwo.token}, it's your turn`
}

function increaseWins() {
  for (var i = 0; i < players.length; i++) {
    players[i].wins++;
  }
}
// update DOM


function addSymbol(e) {
  // for (var i = 0; i < boxes.length; i++){
  //     if (e.target.classList.contains('box')) {
  console.log(e.target);
  e.target.innerHTML += `<div class="player-emojis">🥔</div>`;
  //         }
  //     }
}