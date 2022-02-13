const body = document.body;

document.getElementById('Rock').onclick = playRock;
document.getElementById('Paper').onclick = playPaper;
document.getElementById('Scissors').onclick = playScissors;

var playerScore = 0, computerScore = 0;

function playRock() {
    playRound("Rock");
}
function playPaper() {
    playRound("Paper");
}
function playScissors() {
    playRound("Scissors");
}

function computerPlay() {
    var rps = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();

    document.getElementById('status').innerHTML = "<p>You selected " + playerSelection + ". Computer selected " + computerSelection + "</p>"

    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            console.log("You Chose Rock and Computer Chose Rock!");
            document.getElementById('status').innerHTML += "<p>Tie!</p>";
        }
        else if (computerSelection == "Paper") {
            console.log("You Chose Rock and Computer Chose Paper!");
            document.getElementById('status').innerHTML += "<p>You Lose!</p>";
            computerScore++;
        }
        else if (computerSelection == "Scissors") {
            console.log("You Chose Rock and Computer Chose Scissors!");
            document.getElementById('status').innerHTML += "<p>You Win!</p>";
            playerScore++;
        }
    }

    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("You Chose Paper and Computer Chose Rock!");
            document.getElementById('status').innerHTML += "<p>You Win!</p>";
            playerScore++;
        }
        else if (computerSelection == "Paper") {
            console.log("You Chose Paper and Computer Chose Paper!");
            document.getElementById('status').innerHTML += "<p>Tie!</p>";
        }
        else if (computerSelection == "Scissors") {
            console.log("You Chose Paper and Computer Chose Scissors!");
            document.getElementById('status').innerHTML += "<p>You Lose!</p>";
            computerScore++;
        }
    }

    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            console.log("You Chose Scissors and Computer Chose Rock!");
            document.getElementById('status').innerHTML += "<p>You Lose!</p>";
            computerScore++;
        }
        else if (computerSelection == "Paper") {
            console.log("You Chose Scissors and Computer Chose Paper!");
            document.getElementById('status').innerHTML += "<p>You Win!</p>";
            playerScore++;
        }
        else if (computerSelection == "Scissors") {
            console.log("You Chose Scissors and Computer Chose Scissors!");
            document.getElementById('status').innerHTML += "<p>Tie!</p>";
        }
    }

    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;

    if ((playerScore == 5) || (computerScore == 5)) {
        gameOver();
    }
}

function gameOver() {
    if (playerScore == 5) {
        document.getElementById('status').innerHTML = "<p>You Won!</p>";
        document.getElementById('Rock').onclick = null;
        document.getElementById('Paper').onclick = null;
        document.getElementById('Scissors').onclick = null;
    } else if (computerScore == 5) {
        document.getElementById('status').innerHTML = "<p>You Lost!</p>";
        document.getElementById('Rock').onclick = null;
        document.getElementById('Paper').onclick = null;
        document.getElementById('Scissors').onclick = null;
    }
}