const userChoice = document.getElementById("input_choice");
const userOption = document.querySelectorAll(".user_option");
const randomOption = document.getElementById("random_option");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

let choiceArray = ["Rock", "Paper", "Scissors"];
let random = choiceArray[Math.floor(Math.random() * choiceArray.length)];

function play() {
  randomOption.textContent = `Bot chose: ${random}`;

  let userSelected = "";

  for (let i = 0; i < userOption.length; i++) {
    if (userOption[i].selected) {
      userSelected = userOption[i].innerHTML;
      break;
    }
  }

  if (userSelected === random) {
    result.textContent = "Draw!";
  } else if (
    (userSelected == "Scissors" && random == "Rock") ||
    (userSelected == "Rock" && random == "Paper") ||
    (userSelected == "Paper" && random == "Scissors")
  ) {
    result.textContent = `You lose! ${random} beats ${userSelected}.`;
  } else {
    result.textContent = "You win!";
  }
}

submit.addEventListener("click", play);

/**
 * 
 * 
const userChoice = document.getElementById("input_choice");
const userOption = document.querySelectorAll(".user_option");
const randomOption = document.getElementById("random_option");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

let choiceArray = ["Rock", "Paper", "Scissors"];
let random = choiceArray[Math.floor(Math.random() * choiceArray.length)];

function play() {
  randomOption.textContent = `Bot chose: ${random}`;

  let userSelected = userChoice.value;

  if (userSelected === random) {
    result.textContent = "Draw!";
  } else if (
    (userSelected == "Scissors" && random == "Rock") ||
    (userSelected == "Rock" && random == "Paper") ||
    (userSelected == "Paper" && random == "Scissors")
  ) {
    result.textContent = `You loose! ${random} beats ${userSelected}.`;
  } else {
    result.textContent = "You win!";
  }
}

submit.addEventListener("click", play);

 */
