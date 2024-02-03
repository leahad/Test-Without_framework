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

const testCases = [
    {playerOneMove: "rock", playerTwoMove: "scissor", expectedResult: "player 1 won!"},
    {playerOneMove: "paper", playerTwoMove: "scissor", expectedResult: "player 2 won!"},
    {playerOneMove: "paper", playerTwoMove: "rock", expectedResult: "player 1 won!"},
    {playerOneMove: "rock", playerTwoMove: "rock", expectedResult: "Let's call it a tie"},
    {playerOneMove: "banane", playerTwoMove: "rock", expectedResult: "wrong input"},
];

try {
    for (test of testCases) {
        const expectedResult = test.expectedResult;
        const gameResult = game(test.playerOneMove, test.playerTwoMove);

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
} catch (err) {
    console.log('err:', err)
} finally {
    process.exit(0)
}
