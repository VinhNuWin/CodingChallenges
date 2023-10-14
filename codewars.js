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

//7kyu-love-vs-friendship

const wordsToMarks = (s) =>
  [...s].reduce((res, c) => (res += c.charCodeAt() - 96), 0);

//7kyu alternate capitalization

function capitalize(s) {
  return [
    s
      .split("")
      .map((v, i) => (i % 2 == 0 ? v.toUpperCase() : v.toLowerCase()))
      .join(""),
    s
      .split("")
      .map((v, i) => (i % 2 !== 0 ? v.toUpperCase() : v.toLowerCase()))
      .join(""),
  ];
}
