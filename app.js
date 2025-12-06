console.log("HELLO CODE PLATOON!")

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number (testing):", randomNumber);


function handleFormSubmit(event) {
    event.preventDefault(); // prevents the page from reloading after "submit"
    

//generate random number

const userGuess = Number(document.getElementById("guessed_number").value);
    console.log("User guessed:", userGuess);

    
    // let randomNumber = generateRandomNumber();

    let message = "";

    if (userGuess === randomNumber) {
        message = "Congrats! you guess not wrong!"
    }   else if (userGuess < randomNumber) {
        message = " Too Low, Try guessing again"
    }   else {
        message = "Too high, try guessing again"
    }

        document.getElementById("result").textContent = message;

const displayGuess = document.getElementById("displayGuess");
    if (displayGuess) {
        displayGuess.textContent = 'You guessed: ' + userGuess;
    }
}
