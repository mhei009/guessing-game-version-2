"use strict";
//number of guesses and random number code
function playGuessingGame() {
  const maxGuesses = 10;
  let correctNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  while (attempts < maxGuesses) {
    let userGuess = prompt("Guess the number (1-100):");

    if (userGuess === null) {
      // Handle the case where the user cancels the input
      alert("Boo! Quitter.");
      return;
    }

    userGuess = parseInt(userGuess);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Enter a valid number between 1 and 100 silly. >,<");
    } else if (userGuess === correctNumber) {
      alert(`Wow Good job!, It is: ${correctNumber}!`);
      return;
    } else if (userGuess < correctNumber) {
      alert("Nope! The correct number is higher.");
    } else {
      alert("Nope! The correct number is lower.");
    }

    attempts++;
  }

  alert(
    `Game over! What a looser... You've reached the maximum number of guesses. The correct number was ${correctNumber}.`
  );
}

let userConsent = confirm(
  "Can you play with me please? You have max 10 guesses. :)"
);
if (userConsent) {
  playGuessingGame();
} else {
  alert("Boo.. Nobody wants to play with me... :(");
}
