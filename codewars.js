
//8kyu-remove-duplicates-from-the-list

function distinct(a) {
  return [...new Set(a)];
}

//7kyu-find-the-stray-number

function stray(numbers) {
  return numbers.find(
    number => numbers.indexOf(number) === numbers.lastIndexOf(number)
  );
}

//8kyu-sentence-smash

function smash(words) {
  "use strict";
  return words.join(" ");
}