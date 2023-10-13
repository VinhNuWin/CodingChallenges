//8kyu rock paper scissors

const rps = (p1, p2) => {
  if (p1 === "scissors" && p2 === "paper") return `Player 1 won!`;
  if (p1 === "paper" && p2 === "rock") return `Player 1 won!`;
  if (p1 === "rock" && p2 === "scissors") return `Player 1 won!`;
  if (p1 === "paper" && p2 === "scissors") return `Player 2 won!`;
  if (p1 === "rock" && p2 === "paper") return `Player 2 won!`;
  if (p1 === "scissors" && p2 === "rock") return `Player 2 won!`;
  if (p1 === "scissors" && p2 === "scissors") return `Draw!`;
  if (p1 === "paper" && p2 === "paper") return `Draw!`;
  if (p1 === "rock" && p2 === "rock") return `Draw!`;
};

//8kyu Grasshopper - Terminal game combat function

function combat(health, damage) {
  return health < damage ? 0 : health - damage;
}

//7kyu odd or even

function oddOrEven(array) {
  return array.reduce((start, next) => start + next, 0) % 2 == 0
    ? `${"even"}`
    : `${"odd"}`;
}

//8kyu the feast of many beasts

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

//8kyu how many stairs will suzuki climb in 20 years

function stairsIn20(s) {
  return (
    s
      .reduce((arr, day) => arr.concat(...day), [])
      .reduce((total, stairs) => total + stairs, 0) * 20
  );
}
