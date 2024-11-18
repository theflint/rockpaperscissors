
// Global variables to track scores
let computerScore = 0;
let humanScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        return "ROCK";
    } else if (computerChoice <= 0.66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}


// Function to get a valid human choice
function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Enter rock, paper, or scissors:").trim().toUpperCase();
        if (["ROCK", "PAPER", "SCISSORS"].includes(humanChoice)) {
            return humanChoice;
        }
        console.log("Invalid choice! Please enter rock, paper, or scissors.");
    }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    // Determine the outcome
    if (computerChoice === humanChoice) {
        console.log("It's a draw!");
    } else if (
        (computerChoice === "ROCK" && humanChoice === "PAPER") ||
        (computerChoice === "PAPER" && humanChoice === "SCISSORS") ||
        (computerChoice === "SCISSORS" && humanChoice === "ROCK")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore += 1;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
    }

    // Display current scores
    console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

// Function to play a full game
function playGame() {
    console.log("Welcome to Rock, Paper, Scissors!");
    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Final score and result
    console.log("\nGame Over!");
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("The computer wins! Better luck next time.");
    } else {
        console.log("It's a tie! Great game.");
    }

    // Reset scores for a new game
    computerScore = 0;
    humanScore = 0;
}

// Start the game
playGame();
