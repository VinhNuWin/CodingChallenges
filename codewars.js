// 5kyu Calculating with functions
/*
Description:
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Ruby:

seven(times(five)) # must return 35
four(plus(nine)) # must return 13
eight(minus(three)) # must return 5
six(divided_by(two)) # must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
*/

function zero(func) {
    return func ? func(0) : 0;
  }
  function one(func) {
    return func ? func(1) : 1;
  }
  function two(func) {
    return func ? func(2) : 2;
  }
  function three(func) {
    return func ? func(3) : 3;
  }
  function four(func) {
    return func ? func(4) : 4;
  }
  function five(func) {
    return func ? func(5) : 5;
  }
  function six(func) {
    return func ? func(6) : 6;
  }
  function seven(func) {
    return func ? func(7) : 7;
  }
  function eight(func) {
    return func ? func(8) : 8;
  }
  function nine(func) {
    return func ? func(9) : 9;
  }
  
  function plus(b) {
    return function(a) {
      return a + b;
    };
  }
  function minus(b) {
    return function(a) {
      return a - b;
    };
  }
  function times(b) {
    return function(a) {
      return a * b;
    };
  }
  function dividedBy(b) {
    return function(a) {
      return a / b;
    };
  }

  //5kyu Calculating with functions

function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(n) {return function(v) {return v + n}}
function minus(n) {return function(v) {return v - n}}
function times(n) {return function(v) {return v * n}}
function dividedBy(n) {return function(v) {return v / n}}

// 6kyu uniqyue in order

var uniqueInOrder = function(iterable) {
    if (typeof iterable === "string")
      return iterable.split("").filter((v, i, arr) => arr[i] != arr[i + 1]);
    return iterable.filter((v, i, arr) => arr[i] != arr[i + 1]);
  };