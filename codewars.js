// 6kyu-bouncing-balls



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



// 6kyu-tribonacci-sequence





function tribonacci(signature,n) {

  var trib = signature;

  for (i = 3; i < n; i++) {

    trib.push((trib[i-1] + trib[i-2] + trib[i-3]));

  }

  return trib.slice(0, n);

}



// 8kyu-sort-and-star



function twoSort(s) {

  return s.sort()[0].split('').join('***');

}



// 8kyu-students-final-grade



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



// 6kyu-array.diff



function array_diff(a, b) {

  return a.filter(e => !b.includes(e));

}



// 8kyu-counting-sheep



function countSheeps(arrayOfSheep) {

  const present = arrayOfSheep.filter(sheep => sheep);

  return present.length;

}



// 6kyu-are-they-the-same 



function comp(array1, array2) {

  if(array1 == null || array2 == null) return false;

  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);

  return array1.map(v => v * v).every((v, i) => v == array2[i]);

}



// 8kyu-you-only-need-one

const check = (a,x) => a.includes(x);

// 8kyu-what-is-between

function between(a, b) {
  var list = [];
for (var i = a; i <= b; i++) {
    list.push(i);
}
  return list
}

// 6kyu-the-supermarket-queue

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

// 6kyu-your-order-please

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

// 7kyu-Convert-an-array-of-strings-to-array-of-numbers

function toNumberArray(stringarray){

  return stringarray.map(parseFloat);
}

// 6kyu-break-camelCase

function solution(string) {
  return string.replace(/[A-Z]/g, " $&");
}

console.log('camelCasing: ', solution('camelCasing'));
console.log('camelCasingTest: ', solution('camelCasingTest'));

// 6kyu-Consecutive-Strings

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

