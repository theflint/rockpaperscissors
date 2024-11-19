// Global variables to track scores
let computerScore = 0;
let humanScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");

    let resultMessage;
    if (computerChoice === humanChoice) {
        resultMessage = `It's a draw! Both chose ${humanChoice}.`;
    } else if (
        (computerChoice === "ROCK" && humanChoice === "PAPER") ||
        (computerChoice === "PAPER" && humanChoice === "SCISSORS") ||
        (computerChoice === "SCISSORS" && humanChoice === "ROCK")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
    }

    // Update the results div
    resultsDiv.innerHTML = `<p>${resultMessage}</p>`;

    // Update the score div
    scoreDiv.innerHTML = `<p>Score - Human: ${humanScore}, Computer: ${computerScore}</p>`;

    // Check for a winner
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "Human" : "Computer";
        resultsDiv.innerHTML = `<p>${winner} wins the game!</p>`;
        // Reset scores for a new game
        humanScore = 0;
        computerScore = 0;
        scoreDiv.innerHTML = `<p>Score - Human: 0, Computer: 0</p>`;
    }
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("ROCK", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("PAPER", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("SCISSORS", getComputerChoice()));

