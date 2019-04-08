//Find and connect with another signed in user

//Initialize Game

//Initialize Chat 

//Create Rock Paper Scissor Buttons
var choices = ["rock", "paper", "scissors"];
var userChoice = choices[i];
var oppChoice = choices[i];
var wins = 0;
var ties = 0;
var losses = 0;
//Compare selection to opponents, If you win ++ winCount, If you tie ++ tiesCount, If you lose ++ lossesCount
if ((userChoice === "rock") || (userChoice === "paper") || (userChoice === "scissors")) {

    if ((userChoice === "rock" && oppChoice === "scissors") ||
      (userChoice === "scissors" && oppChoice === "papaer") || 
      (userChoice === "paper" && oppChoice === "rock")) {
      wins++;
    } else if (userChoice === oppChoice) {
      ties++;
    } else {
      losses++;
    }
  