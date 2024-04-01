function playGame() {
	var gameResult = document.getElementById("result");
	gameResult.innerHTML = "";

var userWins = false;

	for (var j = 0; j < 3; j++) {
		if (userWins) {
		break; // Stop if the user wins
    }

    var userChoice, computerChoice;
		for (var i = 0; i < 3; i++) {
		userChoice = prompt("Your Choice: rock, paper, or scissors").toLowerCase();
		var computerChoices = ["rock", "paper", "scissors"];
		computerChoice = computerChoices[Math.floor(Math.random() * 3)];

		var resultMessage = "Your Choice: " + userChoice + "<br>Computer's Choice: " + computerChoice;

		if (!computerChoices.includes(userChoice)) {
			resultMessage += "<br>Invalid choice! Please enter rock, paper, or scissors.";
		} 
		else if (userChoice === computerChoice) {
			resultMessage += "<br>It's a Tie!";
		} 
		else if (
			(userChoice === "rock" && computerChoice === "scissors") ||
			(userChoice === "paper" && computerChoice === "rock") ||
			(userChoice === "scissors" && computerChoice === "paper")
		) {
			resultMessage += "<br>You Won!";
			userWins = true;
			break; // Stop if user wins
		} 
		else {
			resultMessage += "<br>You Lost...";
		}

		// Result message
		gameResult.innerHTML += resultMessage + "<br>";
		}
	}

  // Display winning message when user wins
  if (userWins) {
    gameResult.innerHTML += "<br>Congratulations! You won the game!<br>User Choice: " + userChoice + "<br>Computer's Choice: " + computerChoice;
  }
}