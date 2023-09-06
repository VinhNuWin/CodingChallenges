//8kyu-if-you-cant-sleep-just-count-sheep

var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

//6kyu-title-case

function titleCase(title, minorWords) {
  var minorWords =
    typeof minorWords !== "undefined"
      ? minorWords.toLowerCase().split(" ")
      : [];
  return title
    .toLowerCase()
    .split(" ")
    .map(function (v, i) {
      if (v != "" && (minorWords.indexOf(v) === -1 || i == 0)) {
        v = v.split("");
        v[0] = v[0].toUpperCase();
        v = v.join("");
      }
      return v;
    })
    .join(" ");
}
