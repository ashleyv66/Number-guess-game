let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*10);
}
const compareGuesses = (humanGuess, compGuess, targetNum) => {
    (humanGuess > 9 || humanGuess < 0) ? window.alert('Incorrect entry'): humanGuess;
    const humDiff = Math.abs(targetNum - humanGuess);
    const compDiff = Math.abs(targetNum - compGuess);
    if (humDiff <= compDiff) {
        return true;
    }
    else {
        return false;
    }
}
const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore ++;
            break;
        case 'computer':
            computerScore ++;
            break;
        default:
            break;

    }
}
const advanceRound = () => {
    currentRoundNumber ++;
}
