
const hands = ['Rock','Paper','Scissors'];
const computer = getComputerChoice();
let score = 0

// play five games
for (let i = 0; i <5; i++) {
  const playerHand = prompt("Choose your hand Rock, Paper, Scissors");
  const computerHand = getComputerChoice()

  const sentence = playRound(playerHand,computerHand);
  console.log(sentence);
  
  // keep score
  if (sentence[4]=="W"){
    score++;
  } 
  


}

console.log(`You won ${score} game(s)`)


function getComputerChoice() {
    var index = Math.floor(Math.random() * hands.length)
    return hands[index];

}


function playRound(playerSelection,computerSelection){
    const p = playerSelection.toLowerCase();
    const c = computerSelection.toLowerCase();
 
    // draw cases
    if (p == c) {
        return "Draw..."
    // win cases
    } else if (
        (p == 'paper' & c == 'rock') | (p=='scissors' & c == 'paper')| (p=='rock' & c=='scissors')
    ){
        return `You Win! ${capitalize(p)} beats ${capitalize(c)}`
    } else{
        return `You Lose! ${capitalize(c)} beats ${capitalize(p)}`
    }
}


function capitalize(string){
   return string[0].toUpperCase() + string.slice(1,);
}




