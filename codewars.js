// 7kyu-the-highest-profit-wins



function minMax(arr) {

  var a = arr.sort(function(a,b) {return a-b});

  return [a[0], a[a.length-1]];

}


// build tower



function towerBuilder(nFloors) {

  var finalArray = [];

  var numSpaces = 0;

  // Start from the reverse.

  for (i = nFloors; i > 0; i--) {

    // At the end, the number of spaces are 0.

    // Have one and less for the half of the stars.

    // Add another set of spaces.

    finalArray.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)  + " ".repeat(numSpaces));

    // Increment the space, while going to top.

    numSpaces++;

  }

  // Reverse the array.

  return finalArray.reverse();

}



// write number in expanded form



function expandedForm(num) {

  var multiple = 10;

  var result = [];

  while (num > 1){

    var remainder = num%multiple;

    if(remainder >0){

      result.unshift(remainder);

    }

    num -= remainder;

    multiple = multiple * 10;

  }

  return result.join(" + ");

}



// is he gonna survive



function hero(bullets, dragons){

   if(bullets>=(dragons * 2)){

     return true

}else

{

return false

}

}



// persistent bugger



function persistence(num) {

  if (num.toString().length === 1) {

    return 0;

  }

  var mult = 1;

  var splitStr = num.toString().split("");

  for (var i = 0; i < splitStr.length; i++) {

    mult *= parseFloat(splitStr[i])

  }

  return 1 + persistence(parseFloat(mult));

}



// find the next perfect square



function findNextSquare(sq){

    var root1;

    var nextroot;

    if(Math.sqrt(sq)%1 ===0){

         root1=Math.sqrt(sq)

         nextroot=root1+1

    }else{

        return -1;

    }

    return nextroot*nextroot;

}



// bouncing balls



function bouncingBall(h,  bounce,  window) {

    // Qualify the condition that must be met

    const cond = h > 0 && (bounce > 0 && bounce < 1) && window < h;

    // Check the condition

    if (cond) {

        // If condition is met, the ball will be seen once going up...

        // And once coming down, as well as the first time its dropped

        return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);

    } else {

        // If condition is not met, per instructions, return -1

        return -1;

    }

}



// tribonacci sequence





function tribonacci(signature,n) {

  var trib = signature;

  for (i = 3; i < n; i++) {

    trib.push((trib[i-1] + trib[i-2] + trib[i-3]));

  }

  return trib.slice(0, n);

}



// sort and star



function twoSort(s) {

  return s.sort()[0].split('').join('***');

}



// students final grade



function finalGrade(exam, projects) {

  if (exam > 90 || projects > 10) {

    return 100;

  } else if (exam > 75 && projects >= 5) {

    return 90;

  } else if (exam > 50 && projects >= 2) {

    return 75;

  }

  return 0;

}



// array.diff



function array_diff(a, b) {

  return a.filter(e => !b.includes(e));

}



// counting sheeP



function countSheeps(arrayOfSheep) {

  const present = arrayOfSheep.filter(sheep => sheep);

  return present.length;

}



// are they the same 



function comp(array1, array2) {

  if(array1 == null || array2 == null) return false;

  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);

  return array1.map(v => v * v).every((v, i) => v == array2[i]);

}



// you only need one

const check = (a,x) => a.includes(x);

// what is between

function between(a, b) {
  var list = [];
for (var i = a; i <= b; i++) {
    list.push(i);
}
  return list
}

// the supermarket queue

function queueTime(customers, n) {
  // creates an array of length n representing the tills
  // Each till is given a value of 0 to represent initial waitTime before the queue begins.
  const tills = new Array(n).fill(0);
  // goes through the queue of customer waitTimes
  for (let waitTime of customers) {
    // finds the till with the least wait time on it, adds the next customer's time to it
    const lowestWaitTill = tills.indexOf(Math.min(...tills));
    tills[lowestWaitTill] += waitTime;
  }
  // end result is that the waitTimes (load) on the tills are distributed optimally.
  // The waitTime of the till with the heaviest load represents the total time taken
  return Math.max(...tills);
}

// your order, please

function order(words){
  let arr = words.split(' ')
  let r = []

  arr.forEach(word=>{
    let x = word.split('')
    let num = x.find(el=>parseInt(el))
    r.push([word,parseInt(num)])
  })

  r.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1))
  return r.join(' ')
}

// Convert an array of strings to array of numbers

function toNumberArray(stringarray){

  return stringarray.map(parseFloat);
}

// break camelCase

function solution(string) {
  return string.replace(/[A-Z]/g, " $&");
}

console.log('camelCasing: ', solution('camelCasing'));
console.log('camelCasingTest: ', solution('camelCasingTest'));

// Consecutive Strings

function longestConsec(strarr, k) {
  let arrLength = strarr.length;
  let arr = [];
  
  if(arrLength == 0 || k > arrLength || k <= 0) return "";
    
  for(let i = 0; i <= arrLength - k; i++){
    let current = strarr[i];
    for(let ii = k, jj = 1; ii > 1; ii--, jj++){
      current += strarr[i+jj]
    }
  arr.push(current);
  }
 return arr.reduce(function (a, b) {
        return a.length > b.length ? a : a.length == b.length ? a : b;
    });
}

