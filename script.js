const wrapper = document.querySelector('.wrapper')
const buttons = document.querySelector('.buttons')

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


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('Draw!')
  } else if (humanChoice === 'rock' && computerChoice === 'scissors'
      || humanChoice === 'paper' && computerChoice === 'rock'
      || humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    console.log('You win!')
    ++humanScore
  } else {
    console.log('You lose!')
    ++computerScore
  }
}

wrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('rock') ||
  e.target.classList.contains('paper') ||
  e.target.classList.contains('scissors')) {
    playRound(getHumanChoice(e), getComputerChoice())
  }
})