
}

//7kyu-sum-of-the-first-nth-of-series

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

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
