//7kyu-find-the-middle-element
var gimme = function(inputArray) {
    return [...inputArray].indexOf(inputArray.sort((a, b) => a - b)[1]);
  };


//5kyu-product-of-consecutive-fib-numbers


function productFib(prod) {
    let fib = [0, 1];
    for (let i = 0; fib[i + 1] < prod; i++) fib.push(fib[i] + fib[i + 1]);
    for (let j = 0; j < fib.length; j++) {
      if (fib[j] * fib[j + 1] === prod) return [fib[j], fib[j + 1], true];
      if (fib[j] * fib[j + 1] !== prod && fib[j] * fib[j + 1] > prod)
        return [fib[j], fib[j + 1], false];
    }
  }

  //8kyu-training-js-#5:basic-config-types
  function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }

  //8kyu-Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
  function replace(s) {
    return s.replace(/[aeoiu]/gi, "!");
  }

  //6kyu-multiplication-table
  multiplicationTable = function(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
      let tempArr = [];
      for (let j = 1; j <= size; j++) {
        tempArr.push(i * j);
      }
      arr.push(tempArr);
    }
    return arr;
  };

  //8kyu-grasshopper-terminal-game-move-function
  function move (position, roll) {
    return position + roll * 2
  }