function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
            return "This is a tie!";
        }
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            return "The computer wins!";
        }
    } else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            return "The player wins!";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            return "The player wins!";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            return "The computer wins!";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            return "The computer wins!";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            return "The player wins!";          
        }
    } return winner;
}