const wrapper = document.querySelector('.wrapper')
const results = document.querySelector('.results')
const computerScoreDisplay = document.querySelector('.computer-score')
const humanScoreDisplay = document.querySelector('.human-score')
const buttons = document.querySelector('.buttons')

function getComputerChoice() {
  const random = Math.floor((Math.random() * 3) + 1);

  switch (random) {
    case 1:
      return 'rock';


    case 2:
      return 'paper';

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
  if (computerScore === 5) {
    results.textContent = 'GAME OVER'
    results.style.backgroundColor = '#FB7185'
    computerScoreDisplay.textContent = 'Computer score: 5'

    return
  } else if (humanScore === 5) {
    results.textContent = 'VICTORY'
    results.style.backgroundColor = '#10B981'
    humanScoreDisplay.textContent = 'Player score: 5'

    return
  }

  if (humanChoice === computerChoice) {
    results.innerHTML = `<span style='color: #10B981'>${humanChoice}</span><br>VS<br><span style='color: #FB7185'>${computerChoice}</span><br>It's a draw!`
  } else if (humanChoice === 'rock' && computerChoice === 'scissors'
      || humanChoice === 'paper' && computerChoice === 'rock'
      || humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    results.innerHTML = `<span style='color: #10B981'>${humanChoice}</span><br>VS<br><span style='color: #FB7185'>${computerChoice}</span><br>You win!`
    ++humanScore
  } else {
    results.innerHTML = `<span style='color: #10B981'>${humanChoice}</span><br>VS<br><span style='color: #FB7185'>${computerChoice}</span><br>You lose!`
    ++computerScore
  }

  humanScoreDisplay.textContent = `Player score: ${humanScore}`
  computerScoreDisplay.textContent = `Computer score: ${computerScore}`
}

wrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('rock') ||
  e.target.classList.contains('paper') ||
  e.target.classList.contains('scissors')) {

    playRound(getHumanChoice(e), getComputerChoice())
  }

  if (e.target.classList.contains('restart')) {
    humanScore = 0
    computerScore = 0
    results.textContent = ''
    humanScoreDisplay.textContent = 'Player score: 0'
    computerScoreDisplay.textContent = 'Computer score: 0'
    results.style.backgroundColor = '#94A3B8'
  }
})
