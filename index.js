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