let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let guessCount = 0;

function guessNumber() {
    guess = prompt("Guess a number between 1 and 10");
    guessCount++;
    if (guess === "" || guess === null) {
        alert("Please enter a number!");
        guessNumber();
    } else if (Number(guess) < Number(randomNumber)) {
        alert("Too low! Try again.");
        guessNumber();
    } else if (Number(guess) > Number(randomNumber)) {
        alert("Too high! Try again.");
        guessNumber();
    } else {
        alert("Congratulations! You guessed the correct number in " + guessCount + " attempts!");
    }
}

guessNumber();