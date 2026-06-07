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

function getHumanChoice() {
  return prompt('pick').toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('Draw!');
  } else if (humanChoice === 'rock' && computerChoice === 'scissors'
    || humanChoice === 'paper' && computerChoice === 'rock'
    || humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    console.log('You win!');
    ++humanScore;
  } else {
    console.log('You lose!');
    ++computerScore;
  };
}