//8kyu-beginner-series-#2-clock

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

//7kyu-small-enough-beginners

function smallEnough(a, limit) {
  return a.every(v => v <= limit);
}

//6kyu-mexican-wave

function wave(str) {
  return Array(str.length)
    .fill(str)
    .map(
      (v, i, arr) =>
        v.slice(0, i).toLowerCase() +
        v.slice(i, i + 1).toUpperCase() +
        v.slice(i + 1).toLowerCase()
    )
    .filter(v => v != v.toLowerCase());
}