# HigherLowerGame
Coding challenge for 2i Mock Interview
<br>
<br>
<i> Write a higher/lower game that satisfies the following criteria: 
• Generates a random number. <br>
• Takes in a guess. <br>
• Returns a string with the guess and whether that guess is lower or higher than the random number. <br>
E.g., “You answered 9. The correct answer is higher.” <br>
• If the guess matches the random number, then return a string which confirms this. <br>
E.g., “You answered 9. This is the correct answer!” This challenge (deliberately) does not give any guidance about ranges, input validation, presentation etc., so you are also required to explain any assumptions that you have made. This can be done using comments in the code or in a readme file, or both. You have one hour to complete the task and upload it to GitHub. This can be done any time before the interview. </i>
<br>
<br>
I made up a very basic html template (and a even more basic css styling), then I focus on my script. I chose to use Javascript, as it is probably the language I am more comfortable with now. I declared my first variable (randomNumber), and with the help of the method math.floor(), I created a function able to generate a random number between 1 to 10. <br>
I then created another function (HigherLowerGame) to check if the guess was equal, higher or lower than the random number. I used the if/else statement for it. <br>
Lastly, I estabilished a last function (playGame) where I declared other variables: userGuess, directly taken from what the users imput on the html template, and the result (which calls the HigherLowerGame function). <br>
Lastly, I used "document.getElementByID()" to print out the result on the page.<br>
Please see comments in the code for full explanation.
