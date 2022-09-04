// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
    if (bool === true){
      return "Yes"
    }else{
      return "No"
    }
  }

  // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

  function descendingOrder(n){
    let newN = n.toString().split('').sort(function(a, b){ return b-a;}).join('');
    return +newN
  }

  // Twice as old, calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old)

  function twiceAsOld(dadYearsOld, sonYearsOld){
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }

  // Parse nice int from char problem

  function getAge(inputString){
    return parseInt(inputString);
  }

  // ATM machines allow 4 to 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits

  function validatePin(pin){
    if(!isNaN(pin) && Number.isInteger(pin) && pin.toString().length == 4 || pin.toString().length == 6){
      return true
    }else{
      return false
    }
  }

  //sum of two smallest numbers

  function sumTwoSmallestNumbers(numbers){
    let first = Math.min(..numbers)numbers.splice(numbers.indexOf(first), 1)
    let second = Math.min(..numbers)
    return first + second
  }

  //growth of a population

  function nbYear(p0, percent, aug, p){
    //initialise array
    var finalCatch = [];
    //early conversion
    var percent = percent/100;
    //looping through
    for(var p0; p0<p; p0+=p0*percent+aug){
      currValue = p0 + p0 * percent + aug;
      finalCatch.push(currValue);
    }
    return finalCatch.length
  }

  //will there be enough space

  function enough(cap, on, wait) {
    // your code here
    if((on + wait) < cap){
      return 0
    }else{
      return ((on+wait) - cap)
    }
  }

  // double char


  function doubleChar(str){
    return [..str].map(s=>s.repeat(2)).join("")
  }

  //invert values

  function invert(array){
    return array.map(num=> {
      return num * -1
    })
  }

  // expression matters

  function expressionMatters(a,b,c){
    var r = Math.max(
      a+b+c,
      a*b*c,
      a*b+c,
      a*(b+c),
      a+b*c,
      (a+b)*c
    );
    return r //highest achievable result
  }

  //string ends with

  function solution(str, ending){
    let start = str.length - ending.length
    if(str.substr(start, str.length) == ending){
      return true;
    }else{
      return false;
    }
  }

  // sum of odd numbers

  rowSumOddNumbers(n){
    return Math.pow(n,3);
  }

  // grasshopper - check for factor

  function checkForFactor(base,factor){
    return base % factor == 0
  }