//8kyu-reverse-list-order

function reverseList(list) {
    return list.reverse();
  }

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