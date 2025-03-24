// In javascript, write a higher/lower game that satisfies the following criteria: 
// • Generates a random number. 
// • Takes in a guess. 
// • Returns a string with the guess and whether that guess is lower or higher than the random number. 
// E.g., “You answered 9. The correct answer is higher.” • If the guess matches the random number, then return a string which confirms this. E.g., “You answered 9. This is the correct answer!” This challenge (deliberately) does not give any guidance about ranges, input validation, presentation etc., so you are also required to explain any assumptions that you have made. This can be done using comments in the code or in a readme file, or both. You have one hour to complete the task and upload it to GitHub. This can be done any time before the interview. 
// Please do not share answers or discuss with people who have not completed the challenge.

 // Function to play the higher/lower game

 let randomNumber = generateRandomNumber(); // Generate a random number

        function generateRandomNumber() {
            return Math.floor(Math.random() * 10) + 1; // Generate a number from 1 to 10
        }

 function HigherLowerGame(guess, randomNumber) {
    // Check if the guess is equal to the random number
    if (guess === randomNumber) {
        return `You answered ${guess}. This is the correct answer!`;
    } 
    // Check if the guess is lower than the random number
    else if (guess < randomNumber) {
        return `You answered ${guess}. This is wrong, go higher.`;
    } 
    // If the guess is greater than the random number
    else {
        return `You answered ${guess}. This is wrong, go lower.`;
    }
}

function playGame() {
    const userGuess = parseInt(document.getElementById('userGuess').value, 10); // Get the user's guess from the input
    const result = HigherLowerGame(userGuess, randomNumber); // Call the higher/lower game function
    document.getElementById('result').innerText = result; // Give us the result on the webpage
}