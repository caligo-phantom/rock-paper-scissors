function computerPlay() {
    var rps = [
        "ROCK",
        "PAPER",
        "SCISSORS"
    ];

    return rps[Math.floor(Math.random()*rps.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie!";
    }
    else if((playerSelection == "ROCK") && (computerSelection == "SCISSORS")) {
        return "You Win! Rock beats Scissors";
    }
    else if((playerSelection == "ROCK") && (computerSelection == "PAPER")) {
        return "You Lose! Paper beats Rock";
    }
    else if((playerSelection == "PAPER") && (computerSelection == "ROCK")) {
        return "You Win! Paper beats Rock";
    }
    else if((playerSelection == "PAPER") && (computerSelection == "SCISSORS")) {
        return "You Lose! Scissors beats Paper";
    }
    else if((playerSelection == "SCISSORS") && (computerSelection == "PAPER")) {
        return "You Win! Scissors beats Paper";
    }
    else if((playerSelection == "SCISSORS") && (computerSelection == "ROCK")) {
        return "You Lose! Rock beats Scissors";
    }
}

function play() {
    let playerScore = 0, computerScore = 0;
    do{
        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {

        button.addEventListener('click', () => {
                const computerSelection = computerPlay();
                const body = document.body;
                const div = document.createElement("div");
                div.textContent = playRound(button.id, computerSelection);
                body.append(div);
                const victoryText = div.textContent;

                if((victoryText == "You Win! Rock beats Scissors") || (victoryText == "You Win! Paper beats Rock") || (victoryText == "You Win! Scissors beats Paper")) {
                playerScore++;
                }
                else if((victoryText == "You Lose! Paper beats Rock") || (victoryText == "You Lose! Scissors beats Paper") || (victoryText == "You Lose! Rock beats Scissors")) {
                    computerScore++;
                }

                const div2 = document.createElement("div");
                const p1 = document.createElement("p");
                const p2 = document.createElement("p");

                p1.textContent = playerScore;
                p2.textContent = computerScore;

                div2.append(p1, p2);
                body.append(div2);

                if(playerScore == 5) {
                    const div3 = document.createElement("div");
                    div3.textContent = "You Win!"
                    body.append(div3); 
                }
                else if(computerScore == 5) {
                    const div4 = document.createElement("div");
                    div4.textContent = "You Lose!"
                    body.append(div4);
                }
            });
            
        });

    }while((playerScore == 5) || (computerScore == 5));
}

function game() {
    play();
}

game();