console.log("HELLO CODE PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
let min = 1;
let max = 100;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let randomNumber = function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

const secretNumber = randomNumber(min, max);

console.log(randomNumber(min, max));
    
function checkInput(userInput) {
    let inputElement = document.getElementById("myGuess");
    let userGuess = Number(inputElement.value);
    let responseElement = document.getElementById("returnResponse");

    if (!userGuess) {
        responseElement.textContent = "Please enter a number.";
        return;
    }

    if (userGuess < 1 || userGuess > 100) {
        responseElement.textContent = "Your guess must be between 1 and 100.";
        return;
    }

    if (userGuess < secretNumber) {
        responseElement.textContent = "Too low, guess higher.";
    } else if (userGuess > secretNumber) {
        responseElement.textContent = "Too high, guess lower.";
    } else {
        responseElement.textContent = "You win!";
    }
}