
  
 
//6kyu-playing-with-digits

function digPow(n, p) {
  let arr =
    n
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, cur, i, arr) => acc + Math.pow(arr[i], p + i), 0) / n;
  return ("" + arr).includes(".") ? -1 : arr;
}

//8kyu-find-the-first-non-consecutive-number

function firstNonConsecutive(arr) {
  const result = arr.find((number, index) => number !== index + arr[0])
  return Number.isInteger(result) ? result : null
}

//8kyu-opposites-attract

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

//8kyu-sum-without-highest-and-lowest-numbers

function sumArray(array) {
  if (!Array.isArray(array)) return 0
 return array
     .sort((a, b) => a - b)
     .slice(1, array.length - 1)
     .reduce((a, b) => a + b, 0)
 }


