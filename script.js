let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, target) {

    let playerDistance = Math.abs(target - humanGuess);
    let computerDistance = Math.abs(target - computerGuess);

    if (playerDistance <= computerDistance) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {

    if (winner === 'human') {
        humanScore++;
    }

    if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;

}