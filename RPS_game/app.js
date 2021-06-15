var resultP = document.querySelector(".results > p")

var userPoints = 0;
var computerPoints = 0;

function score() {
    var scoreDiv = document.getElementById("score").innerHTML = userPoints + " - " + computerPoints;
}
setInterval(score, 100);

function getpcChoice() {
    var gameChoice = ["rock", "paper", "scissors"];
    var randomChoiceIndex = Math.floor(Math.random() * 3);
    return gameChoice[randomChoiceIndex];

}

function addEventForUser(type) {
    var btn = document.getElementById("btn-" + type);
    btn.addEventListener("click", function () {
        var pcChoice = getpcChoice();

        console.log("user choice - " + type);
        console.log(getResult(pcChoice, type));
    });
}

const btnStart = document.getElementById('startGame')

btnStart.addEventListener('click', function () {

    addEventForUser("rock");
    addEventForUser("paper");
    addEventForUser("scissors");


});



function getResult(pcChoice, userChoice) {
    if (pcChoice === "rock" && userChoice === "paper" ||
        pcChoice === "paper" && userChoice === "scissors" ||
        pcChoice === "scissors" && userChoice === "rock") {

        resultP.innerHTML = "You won!!!"
        win();
    }


    else if (pcChoice === "paper" && userChoice === "rock" ||
        pcChoice === "scissors" && userChoice === "paper" ||
        pcChoice === "rock" && userChoice === "scissors") {

        resultP.innerHTML = "pc wins...better luck next time";
        lost();
    }

    else if (pcChoice === "paper" && userChoice === "paper" ||
        pcChoice === "scissors" && userChoice === "scissors" ||
        pcChoice === "rock" && userChoice === "rock")

        resultP.innerHTML = "It's a tie! Not bad. Try again! Never give up!";

}

function win() {
    userPoints++;
    if (userPoints === 11)
     userPoints = 0;

}

function lost() {
    computerPoints++;
    if (computerPoints === 11)
     computerPoints = 0; 
}
