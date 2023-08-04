function play(playerChoice) 
{
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const outcome = determineOutcome(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, outcome);
}

function determineOutcome(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
    {
        return "It's a tie!";
    } 
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    )
    {
        return 'You win!';
    } 
    else 
    {
        return 'Computer wins!';
    }
}

function displayResult(playerChoice, computerChoice, outcome) 
{
    const resultElement = document.getElementById('outcome');
    resultElement.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${outcome}`;
}
