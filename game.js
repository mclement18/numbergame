function evaluateGuess(secretNumber, attempts) {
    var userGuess = window.prompt("Enter a number:");
    var guess = Number(userGuess);
    if (Number.isInteger(guess)) {
        if (guess < secretNumber) {
            console.log("The secret number is bigger!");
            return false;
        } else if (guess > secretNumber) {
            console.log("The secret number is smaller!");
            return false;
        } else if (guess == secretNumber) {
            if (attempts == 1) {
                var attemptWord = " attempt!";
            } else {
                var attemptWord = " attempts!";
            }
            console.log("Congratulation! You found the secret number in " + attempts.toString() + attemptWord);
            return true;
        }
    } else {
        console.log("Only integer numbers are accepted.");
        return true;
    }
}


console.log("Welcome in the guess the number game!");
console.log("You have to find the secret number which is between 1 and 100.");
var secretNumber = Math.floor(Math.random() * 100 + 1);
var attempts = 0;

while (true) {
    attempts++;
    if (evaluateGuess(secretNumber, attempts)) {
        break;
    }
}

console.log("Try again!");
