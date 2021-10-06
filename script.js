console.log('Hello!')

const computerPlay = () => {
    const moves = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}
const rockPaperScissors = (playerSelection, computerSelection) => {
    let playerPick = playerSelection.toLowerCase();
    let winner = '';
    //the player picks scissors
    if(playerPick === 'scissors' && computerSelection === 'paper') {
        console.log(`The computer chose ${computerSelection}, Scissors beats paper, you win!`);
        winner = 'player';
    } else if (playerPick === 'scissors' && computerSelection === 'scissors') {
        console.log(`The computer chose ${computerSelection}, It's a tie!`);
        winner = 'tie';
    } else if (playerPick === 'scissors' && computerSelection === 'rock') {
        console.log(`The computer chose ${computerSelection}, Rock beats scissors, the computer wins!`);
        winner = 'computer';
    }
    // the player picks paper 
    else if (playerPick === 'paper' && computerSelection === 'rock') {
        console.log(`The computer chose ${computerSelection}, Paper beats rock, you win!`);
        winner = 'player';
    } else if (playerPick === 'paper' && computerSelection === 'scissors') {
        console.log(`The computer chose ${computerSelection}, Scissors beats paper, the computer wins!`);
        winner = 'computer';
    } else if (playerPick === 'paper' && computerSelection === 'paper') {
        console.log(`the computer chose ${computerSelection}, It's a tie!`);
        winner = 'tie';
    }
    // the player picks rock
    else if (playerPick === 'rock' && computerSelection === 'scissors') {
        console.log(`The computer chose ${computerSelection}, Rock beats scissors, you win!`);
        winner = 'player';
    } else if(playerPick === 'rock' && computerSelection === 'paper') {
        console.log(`The computer chose ${computerSelection}, Paper beats rock, the computer wins!`);
        winner = 'computer';
    } else if (playerPick === 'rock' && computerSelection === 'rock') {
        console.log(`The computer chose ${computerSelection}, It's a tie!`);
        winner = 'tie';
    }
    return winner;
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;
    result = '';
    for(let i = 0; i < 5; i++) {
       let playerPick = window.prompt('Rock, Paper, Scissors, shoot!');
       let result = rockPaperScissors(playerPick, computerPlay());
        if(result === 'player') {
            playerScore++;
        } else if (result === 'computer') {
            computerScore++;
        } else if (result === 'tie') {
            ties++;
        }
    }

    if(playerScore > computerScore) {
        result =  `Your score: ${playerScore}, computer's score: ${computerScore}, ties: ${ties}. You win!`;
    } else if (computerScore > playerScore) {
        result = `Your score: ${playerScore}, computer's score: ${computerScore}, ties: ${ties}. The computer wins!`;
    } else if (playerScore === computerScore) {
        result = `Your score: ${playerScore}, computer's score: ${computerScore}, ties: ${ties}. It's a tie!`;
    }
    return result;
}
console.log(game());