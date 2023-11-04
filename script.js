"use strict";

function playGuessingGame() {
  const maxGuesses = 10; // Maximum number of guesses allowed
  let correctNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  let attempts = 0; // Initialize the attempts counter to 0

  while (attempts < maxGuesses) {
    let userGuess = prompt("Guess the number (1-100):");

    if (userGuess === null) {
      alert("Boo! Quitter."); // Handle if the user cancels the game
      return;
    }

    userGuess = parseInt(userGuess); // Convert user's input to an integer (parseInt)

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Enter a valid number between 1 and 100 silly. >,<"); // Handle invalid input
    } else if (userGuess === correctNumber) {
      alert(`Wow so lucky.. good job! It is: ${correctNumber}!`); // If the guess is correct this displays the correct answer.
      return;
    } else if (userGuess < correctNumber) {
      alert("Nope! The correct number is higher."); // feedback if the guess is too low
    } else {
      alert("Nope! The correct number is lower."); // feedback if the guess is too high
    }

    attempts++; // increase the attempts of counter or attempts.
  }

  alert(
    `Boo! What a looser.. Game over! You've reached the maximum number of guesses. The correct number was ${correctNumber}.`
  ); // Display a game over message with the correct number
}

function playAgain() {
  let userConsent = confirm("Can we play again?"); // Ask the user if they want to play again.
  if (userConsent) {
    playGuessingGame(); // If the user consents, start a new game
    playAgain(); // repeat call playAgain() reloads for another round
  } else {
    alert("Hate to see you go. But see you next time..."); // Display a farewell message if the user chooses not to play again
  }
}

let userConsent = confirm(
  "Can you play with me please? You have max 10 guesses. :)"
); // Ask the user for consent to play the game
if (userConsent) {
  playGuessingGame(); // If the user consents, start the initial game
  playAgain(); // Allow multiple rounds of the game by calling playAgain()
} else {
  alert("Boo.. Nobody wants to play with me... :("); // Display a message if the user declines to play
}
