// data model
var players = [playerOne, playerTwo];
var playerOne;
var playerTwo;

// querySelectors
// boxOne = document.querySelector('#one')
// boxTwo = document.querySelector('#two')
// boxThree = document.querySelector('#three')
boxes = document.querySelectorAll(".box");

// eventListeners
// boxOne.addEventListener('click', addSymbol)
// boxTwo.addEventListener('click', addSymbol)
// boxThree.addEventListener('click', addSymbol)
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function (e) {
    addSymbol(e);
  });
}

// var boxes = [boxOne, boxTwo, boxThree]

// functions
function storePlayerInfo(id, token) {
  return {
    id: id,
    token: token,
    wins: 0,
  };
}

function increaseWins() {
  for (var i = 0; i < players.length; i++) {
    players[i].wins++;
  }
}

function addSymbol(e) {
  // for (var i = 0; i < boxes.length; i++){
  //     if (e.target.classList.contains('box')) {
  console.log(e.target);
  e.target.innerHTML += `<div class="player-emojis">🥔</div>`;
  //         }
  //     }
}
