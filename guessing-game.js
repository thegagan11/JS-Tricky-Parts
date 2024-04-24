function guessingGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;

    return function(guess) {
        if (guess === targetNumber) {
            return "You got it!";   

        } else if (guess < targetNumber) {
            return `too low!`;

        } else {
            return "too high!"
        }
    };
}

module.exports = { guessingGame };
