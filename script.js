//game logic
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

// overlay and popup divs
const popupDiv = document.querySelector('#popup');
const overlayDiv = document.querySelector('#overlay')
let popupText = document.querySelector('#popupText')

// popup buttons 
const exitButton = document.querySelector('#exitButton');
const nextPlayButton = document.querySelector('#popupButton');

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
// creates five round game 
const firstToFive = () => {
    if(playerScore >= 5 || computerScore >= 5) {
        if(playerScore > computerScore) {
            popupDiv.classList.add('active');
            overlayDiv.classList.add('active');
            popupText.textContent = 'Congratulations you win!'
        } else if (computerScore > playerScore) {
            popupDiv.classList.add('active');
            overlayDiv.classList.add('active');
            popupText.textContent = 'Oops! The computer won!'
        }
    }
}
// what happens on selection
const clickChoice = (value) => {
    playerDiv.appendChild(image);
    image.src = `${value}.png`;
    let computerPick = computerPlay()
    rockPaperScissors(value, computerPick);
    firstToFive()
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
        clickChoice(e.target.value);
    })
})

//exit button functionality
exitButton.addEventListener('click', () => {
    popupDiv.classList.remove('active');
    overlayDiv.classList.remove('active');
    buttons.forEach((button) => {
        button.disabled = true;
    })
})

//reset game functionality 
nextPlayButton.addEventListener('click', () => {
    popupDiv.classList.remove('active');
    overlayDiv.classList.remove('active');
     playerScore = 0;
     computerScore = 0;
     ties = 0;
     playerScoreDisplay.textContent = playerScore;
     computerScoreDisplay.textContent = computerScore;
     tiesDisplay.textContent = ties;
     playerDiv.removeChild(image);
     computerDiv.removeChild(computerImage);
})