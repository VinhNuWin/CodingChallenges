  //8kyu Find multiples of a number

  function findMultiples(integer, limit) {
    const result = []
  
    for (let i = integer; i <= limit; i += integer) {
      result.push(i)
    }
  
    return result
  }

  //5kyu maximum subarray sum

  var maxSequence = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
      for (let j = 1; j <= arr.length; j++) {
        if (arr.slice(i, j).reduce((a, b) => a + b, 0) > sum) {
          sum = arr.slice(i, j).reduce((a, b) => a + b, 0);
        }
      }
    return sum > 0 ? sum : 0;
  };

  //6kyu counting duplicates

  function duplicateCount(text) {
    return (
      text
        .toLowerCase()
        .split("")
        .sort()
        .join("")
        .match(/([^])\1+/g) || []
    ).length;
  }

  //8kyu name shuffler

  function nameShuffler(str) {
    return str
      .split(" ")
      .reverse()
      .join(" ");
  }

  //8kyu All star code challenge #18

  function strCount(str, letter){  
    return str.split(letter).length-1
  }