//8kyu-area-of-square

function squareArea(A) {
  return Number(Math.pow((2 * A) / 3.1416, 2).toFixed(2));
}

//6kyu-sort-the-odd

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}

//7kyu-largest-pair-sum

function largestPairSum(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((a, b) => a + b, 0);
}
