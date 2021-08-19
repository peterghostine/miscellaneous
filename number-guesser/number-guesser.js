let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random()*10);
}
// console.log(generateTarget());
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  /* This also resolves ties automatically in favor of the user
     without having to check if the two guesses are equal. */  
  return (Math.abs(secretTarget-computerGuess) < Math.abs((secretTarget-humanGuess))) ? false : true;
}
console.log(compareGuesses(5,1,3));
const updateScore = (winner) => {
  switch (winner) {
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
      break;  
  }
}
// updateScore('human');
// console.log(humanScore, computerScore, currentRoundNumber);
const advanceRound = () => {
  currentRoundNumber += 1;
}