const wrapper = document.querySelector('.wrapper')
const results = document.querySelector('.results')
const computerScoreDisplay = document.querySelector('.computer-score')
const humanScoreDisplay = document.querySelector('.human-score')

function getComputerChoice() {
  const random = Math.floor((Math.random() * 3) + 1);

  switch (random) {
    case 1:
      return 'rock';
      break;

    case 2:
      return 'paper';
      break;

    case 3:
      return 'scissors';
  };
}

function getHumanChoice(e) {
  return e.target.textContent.toLowerCase()
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    results.textContent = `${humanChoice} 
    VS 
    ${computerChoice} 
    It's a draw!`
  } else if (humanChoice === 'rock' && computerChoice === 'scissors'
      || humanChoice === 'paper' && computerChoice === 'rock'
      || humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    results.textContent = `${humanChoice} 
    VS 
    ${computerChoice} 
    You Win!`
    ++humanScore
  } else {
    results.textContent = `${humanChoice} 
    VS 
    ${computerChoice} 
    You Lose!`
    ++computerScore
  }

  humanScoreDisplay.textContent = `Player score: ${humanScore}`
  computerScoreDisplay.textContent = `Computer score: ${computerScore}`
}

if (computerScore > 4) {
  results.textContent = 'GAME OVER'
}

wrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('rock') ||
  e.target.classList.contains('paper') ||
  e.target.classList.contains('scissors')) {
    if (computerScore > 4) {
      results.textContent = 'GAME OVER'
      results.style.backgroundColor = '#FB7185'
      computerScoreDisplay.textContent = 'Computer score: 5'

      return
    } else if (humanScore > 4) {
      results.textContent = 'VICTORY'
      results.style.backgroundColor = '#10B981'
      humanScoreDisplay.textContent = 'Player score: 5'

      return
    } else if (humanScore > 4 && computerScore > 4) {
      results.textContent = 'DRAW'
      results.style.backgroundColor = '#94A3B8'
      humanScoreDisplay.textContent = 'Player score: 5'
      computerScoreDisplay.textContent = 'Computer score: 5'

      return
    }

    playRound(getHumanChoice(e), getComputerChoice())
  }

  if (e.target.classList.contains('restart')) {
    humanScore = 0
    computerScore = 0

    results.textContent = ''
    humanScoreDisplay.textContent = 'Player score: 0'
    computerScoreDisplay.textContent = 'Computer score: 0'
  }
})