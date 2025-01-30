const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

let numberOfGuess = 0;

const validateNumber = (value) => {
  if (isNaN(value)) {
    return "Please enter a valid Number";
  } else if (+value < 1 || +value > 100) {
    return "Please enter a number between 1 to 100";
  }
};

const checkGuess = (guess) => {
  numberOfGuess++;
  console.log(`${numberOfGuess} in 10`);
  if (guess === randomNumber) {
    console.log("You Guessed correctly.");
  } else {
    guess < randomNumber
      ? console.log("Too low! Try again.")
      : console.log("Too higth! Try again.");
    return play();
  }
};

const play = () => {
  const number = prompt("Enter a Number betwen 1 to 100");
  if (number === null) return;
  if (numberOfGuess >= 10) {
    console.log("Game over!");
    console.log(`It was the answer ${randomNumber}`);
    return;
  }

  const validation = validateNumber(number);
  if (validation) {
    console.log(validation);
    return play();
  }
  checkGuess(+number);
};
play();
