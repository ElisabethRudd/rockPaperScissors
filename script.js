console.log('Hello!')

// displaying player Score
let playerScore = 0;
const playerScoreDisplay = document.querySelector('#playerScore');

// displaying ties
let ties = 0;
const tiesDisplay = document.querySelector('#ties');

//displaying computer score
let computerScore = 0;
const computerScoreDisplay = document.querySelector('#computerScore');

// image
const image = document.createElement('img');

//image containers 
const playerDiv = document.querySelector('#playerSelection');
const computerDiv = document.querySelector('#computerSelection');

// generating computer's choice
const computerPlay = () => {
    const moves = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}
//one round of game function
const rockPaperScissors = (playerSelection, computerSelection) => {
    //the player picks scissors
    if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        ties++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
    }
    // the player picks paper 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        ties++;
    }
    // the player picks rock
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        ties++;
    }
    return;
}
//repeated five rounds function
const game = () => {
    result = '';
    for(let i = 0; i < 5; i++) {
       let playerPick = 'rock';
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


// hooking up the buttons 
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.value);
        if(e.target.value === 'rock') {
            playerDiv.appendChild(image);
            image.src = 'rock.png';
            rockPaperScissors(e.target.value, computerPlay);
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            tiesDisplay.textContent = ties;
        } else if(e.target.value === 'paper') {
            image.src='paper.png';
            rockPaperScissors(e.target.value, computerPlay);
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            tiesDisplay.textContent = ties;
        } else if(e.target.value=== 'scissors') {
            image.src = 'scissors.png';
            rockPaperScissors(e.target.value, computerPlay);
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            tiesDisplay.textContent = ties;
        }
    })
})
//console.log(game());