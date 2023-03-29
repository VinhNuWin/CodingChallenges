//6kyu-duplicate-encoder

function duplicateEncode(word) {
    return word
      .toLowerCase()
      .split("")
      .map(function(v, i, arr) {
        return arr.indexOf(v) == arr.lastIndexOf(v) ? "(" : ")";
      })
      .join("");
  }

//8kyu Exclamation marks series #1_ Remove a exclamation mark from the end of string.js

function remove(s){
    return s.replace(/!$/,'');
   }