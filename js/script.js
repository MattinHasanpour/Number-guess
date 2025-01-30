const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

const play = () => {
  const number = prompt("Enter a Number betwen 1 to 100");
  if (number === null) {
    console.log("Stop in the game");
    return;
  }
  console.log(number);
};
play();
