"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //makes sure the JS code runs after the HTML and images have been loaded.

  //game code begins..
  function playGuessingGame() {
    const maxGuesses = 10; // Maximum number of guesses allowed
    let correctNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    let attempts = 0; // Initialize the attempts counter to 0

    console.log(`The correct number is: ${correctNumber}`); // Log the correct answer

    while (attempts < maxGuesses) {
      let userGuess = prompt(
        "Guess the number (1-100) It Will Be Like Finding A Needle In A Haystack.:"
      );

      if (userGuess === null) {
        alert("chicken..."); // Handle if the user cancels the game
        return;
      }

      userGuess = parseInt(userGuess); // Convert user's input to an integer (parseInt)

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert(
          "The Rules Of Our Game Have Been Made Very Clear. You Need To Abide By Those Rules. Enter a valid number between 1 and 100"
        ); // Handle invalid input
      } else if (userGuess === correctNumber) {
        alert(`You got lucky...  It is: ${correctNumber}!`); // If the guess is correct this displays the correct answer.
        return;
      } else if (userGuess < correctNumber) {
        alert(
          "You are wrong..  The correct number is higher. choose wisely.. "
        ); // feedback if the guess is too low
      } else {
        alert(
          "You are wrong again.. The correct number is lower. TiK. ToK.. Tik.. Tok..."
        ); // feedback if the guess is too high
      }

      attempts++; // increase the attempts of counter or attempts.
    }

    alert(
      `Game over!  You've reached the maximum number of guesses. The correct number was ${correctNumber}.`
    ); // Display a game over message with the correct number
  }

  function playAgain() {
    let userConsent = confirm(
      "Vengeance Changes A Person. Welcome to your rebirth... Play again..."
    ); // Ask the user if they want to play again.
    if (userConsent) {
      playGuessingGame(); // If the user consents, start a new game
      playAgain(); // repeat call playAgain() reloads for another round
    } else {
      alert("live or die, make your choice,"); // Display a farewell message if the user chooses not to play again
    }
  }

  let userConsent = confirm("Let´s play a game... You have max 10 guesses. :)"); // Ask the user for consent to play the game
  if (userConsent) {
    playGuessingGame(); // If the user consents, start the initial game
    playAgain(); // Allow multiple rounds of the game by calling playAgain()
  } else {
    alert("I'm Sick Of People Who Don't Appreciate Their Blessings.. Goodbye!"); // Display a message if the user declines to play
  }
});
