
const hands = ['Rock','Paper','Scissors'];
const computer = getComputerChoice();
const result = document.querySelector('.result');
let p_score = 0;
let c_score = 0;

const pHand = document.querySelector('.p-hand');
const cHand = document.querySelector('.c-hand');

const pScore = document.querySelector('.p-score');
const cScore = document.querySelector('.c-score');

// add trigger to play again

const playButton = document.querySelector('#again');
playButton.onclick= refresh;

// add trigger to buttons;
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach((button)=>{
 button.addEventListener('click',(e)=>
 {
   const playerHand = e.target.innerText;
   const computerHand = getComputerChoice()
   
   pHand.innerText=playerHand;
   cHand.innerText= computerHand;
   
   const sentence = playRound(playerHand,computerHand);

   

   result.innerText= sentence;
   // keep score
   if (sentence[4]=="W"){
    p_score++;
    result.style.color='green';
    } 
    else if(sentence[4]==['L']){
    c_score++;
    result.style.color='red';
}
    else{
        result.style.color='black';
    }
   // reach 5:
   if (p_score==5){
    pHand.innerText= "Player";
    cHand.innerText= "Wins";
    cHand.style.color='Green';
    playAgain();

   }
   else if(c_score==5){
    pHand.innerText= "Computer"
    cHand.innerText= "Wins"
    cHand.style.color='Red';
    playAgain();
   }
   
   //show updated score 
   pScore.innerText= p_score;
   cScore.innerText= c_score;
 })
});

  
function playAgain(){
    //hide hands button
    document.querySelector('.buttons').style.display='none';
    // show play again button;

    document.querySelector('.restart').style.display='flex'; 
}

function refresh(){
   //show hands button
   document.querySelector('.buttons').style.display='flex';
   // hide play again button;

   document.querySelector('.restart').style.display='none';
   pHand.innerText='';
   cHand.innerText='';
   p_score=0;
   c_score=0;

   pScore.innerText=0;
   cScore.innerText=0;
   result.innerText='';
}


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




