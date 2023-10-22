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
