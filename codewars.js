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

  
 

