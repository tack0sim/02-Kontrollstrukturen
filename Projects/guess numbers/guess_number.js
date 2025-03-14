const fieldset = document.getElementById("fieldset");
const input = document.querySelector(".input");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");
const guesses = document.getElementById("guesses");

let count = 1;
let resetBtn;

let randomNumber = Math.floor(Math.random() * 100) + 1;

submitBtn.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = Number(input.value);
  if (count === 1) {
    guesses.textContent = "Previous numbers: ";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    result.textContent = "Congratulations! You have won!";
    gameOver();
  } else if (count === 10) {
    result.textContent = "You lost! Out of turns.";
    gameOver();
  } else {
    if (userGuess < randomNumber) {
      result.textContent = "Try again! Guess was too low.";
    } else if (userGuess > randomNumber) {
      result.textContent = "Try again! Guess was too high.";
    }

    count++;
    input.textContent = "";
  }
}

function gameOver() {
  submitBtn.disabled = true;
  resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset game";
  fieldset.appendChild(resetBtn);
  resetBtn.addEventListener("click", resetGame);
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  count = 1;
  result.textContent = "";
  guesses.textContent = "";
  input.value = "";
  submitBtn.disabled = false;
  resetBtn.parentNode.removeChild(resetBtn);
}
