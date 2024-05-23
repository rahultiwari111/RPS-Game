let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice= () =>{
    const options = ["rock" ,"paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}
const drawGame = () =>{
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
    if(userWin) {
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore; 
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if( userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

