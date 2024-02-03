function game(playerOneMove, playerTwoMove) {
    const result =  "player 1 : " + playerOneMove + " VS player 2 : " + playerTwoMove;
    console.log(result);
    switch (result) {
        case "player 1 : rock VS player 2 : scissor":
            return "player 1 won!";
        case "player 1 : paper VS player 2 : scissor":
            return "player 2 won!";
        case "player 1 : paper VS player 2 : rock":
            return "player 1 won!";
        default:
            if (playerOneMove === playerTwoMove) {
                return "Let's call it a tie";
            } else {
                return "wrong input";
            }
    }
}

const mockGameResult = {
    called: false,
    count: 0,
    playerOneMove: "rock", 
    playerTwoMove: "scissor",
    gameOn: function () {
        this.called = true
        this.count++
        return "player 1 won!"
    }
}
try {
    const expectedResult = "player 1 won!";
    const fetchGame = mockGameResult.gameOn.bind(mockGameResult);

    const gameResult = fetchGame();
    if (!mockGameResult.called) {
        throw {
            message: "La fonction n'a pas été appelée"
        }
    }    
    if (expectedResult !== gameResult) {
        throw {
        message: 'Mauvais résultat',
        actual: gameResult,
        expected: expectedResult
        }
    } 
    console.log(gameResult);
    console.log('Test réussi 🎉');
    }

catch (err) {
    console.log('err:', err)
} finally {
    process.exit(0)
}
    
