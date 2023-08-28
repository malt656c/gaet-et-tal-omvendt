let computerGuessDisplay = document.querySelector("h1");
let minNumber;
let maxNumber;
let myNumber;
let currentGuess;
document.querySelector("button").addEventListener("click", init);
/*  */
function init() {
  minNumber = 0;
  maxNumber = parseInt(document.querySelector("input[name='maximum']").value);
  myNumber = parseInt(document.querySelector("input[name='yournumber']").value);
  currentGuess = Math.floor((maxNumber + minNumber) / 2);
  console.log(minNumber, maxNumber, myNumber);
  document.querySelector("button").removeEventListener("click", init);
  document.querySelector("button").addEventListener("click", guess);
  guess();
}

/* gættefunktion */
function guess() {
  console.log(currentGuess);
  computerGuessDisplay.textContent = currentGuess;
  if (currentGuess == myNumber) {
    computerGuessDisplay.textContent = "your number is: " + currentGuess;
  } else if (currentGuess < myNumber) {
    minNumber = currentGuess;
    currentGuess = Math.floor((maxNumber + minNumber) / 2);
  } else if (currentGuess > myNumber) {
    maxNumber = currentGuess;
    currentGuess = Math.floor((maxNumber + minNumber) / 2);
  }
}
