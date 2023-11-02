//8kyu Formatting decimal places #0

function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

//8kyu Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}

//8kyu Regex count lowercase letters

function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}
