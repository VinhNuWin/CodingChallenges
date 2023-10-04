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
