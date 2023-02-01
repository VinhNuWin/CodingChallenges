
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

