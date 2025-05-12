const secretNumber = Math.floor(Math.random() * 10) + 1;
let tries = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  tries++;

  if (guess === secretNumber) {
    message.innerText = `You got it in ${tries} tries... but at what cost? 😈`;
    document.body.style.background = "#500";
    playSound();
  } else if (isNaN(guess) || guess < 1 || guess > 100) {
    message.innerText = "That’s not even a valid guess... 😐";
  } else {
    message.innerText = `Wrong... Try again. 😵‍💫`;
    document.body.classList.add("flash");
    setTimeout(() => document.body.classList.remove("flash"), 200);
    if (tries % 3 === 0) {
      message.innerText = "It's watching you now... 👁️";
    }
  }
}

function playSound() {
  document.getElementById("scream").play();
}
