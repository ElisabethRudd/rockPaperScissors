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

// images
const image = document.createElement('img');
const computerImage = document.createElement('img');

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
const clickChoice = (value) => {
    playerDiv.appendChild(image);
    image.src = `${value}.png`;
    let computerPick = computerPlay()
    rockPaperScissors(value, computerPick);
    computerDiv.appendChild(computerImage)
    computerImage.src = `${computerPick}.png`
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    tiesDisplay.textContent = ties;
}
// hooking up the buttons 
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.value);
        clickChoice(e.target.value);
    })
})
