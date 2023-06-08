// data model
var players = [playerOne, playerTwo];
var playerOne; 
var playerTwo;

// functions
function storePlayerInfo(id, token) {
    return {
        id: id,
        token: token,
        wins: 0
    }
}

function increaseWins() {
    for (var i = 0; i < players.length; i++){
       players[i].wins++ 
    }    
}
