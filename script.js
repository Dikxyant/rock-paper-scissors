console.log("welcome to 5 rounds of rock, paper or scissors game!");
let humanScore = 0;
let computerScore = 0;

//for random rock paper or sissors
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0){
        console.log("rock");
    }
    else if (computerChoice === 1){
        console.log("paper");
    }
    else (console.log("scissors"));
    return computerChoice;
};
// getComputerChoice(3);

//for human choice of rock paper or scissors
function getHumanChoice(){
    let humanChoice = prompt("select rock, paper or scissors");
    console.log(humanChoice);
    return humanChoice;
};
// getHumanChoice();

//for game rounds
function playGame(){
    let i;
    for (i = 0; i<5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(3);
        playRound(humanChoice, computerChoice);
    }
    function playRound(humanChoice, computerChoice){
        if(humanChoice == "rock" || computerChoice == "scissors"){
            console.log("you win, rock beats scissors");
            humanScore++;
            console.log("Your score is "+humanScore);
            console.log("Computer's score is "+computerScore);
        }
        else if(humanChoice == "rock" || computerChoice == "paper"){
            console.log("you lose, paper beats rock");
            computerScore++;
            console.log("Your score is "+humanScore);
            console.log("Computer's score is "+computerScore);
        }
        else if(humanChoice == "paper" || computerChoice == "rock"){
            console.log("you win, paper beats rock");
            humanScore++;
            console.log("Your score is "+humanScore);
            console.log("Computer's score is "+computerScore);
        }
        else if(humanChoice == "paper" || computerChoice == "scissors"){
            console.log("you lose, scissors beats paper");
            computerScore++;
            console.log("Your score is "+humanScore);
            console.log("Computer's score is "+computerScore);
        }
        else if(humanChoice == "scissors" || computerChoice == "rock"){
            console.log("you lose, rock beats scissors");
            computerScore++;
            console.log("Your score is "+humanScore);
            console.log("Computer's score is "+computerScore);
        }
        else if(humanChoice == "scissors" || computerChoice == "paper"){
            console.log("you win, scissors beats papaer");
            humanScore++;
            console.log("Your score is "+humanScore);
            console.log("Computer's score is "+computerScore);
        }
    };  
    if(humanScore>computerScore){
        console.log("you win the game!!");
    }
    else(
        console.log("you loose the game!!")
    );
};
playGame();