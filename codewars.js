//5kyu-directions-reduction

function dirReduc(arr) {
    let str = arr.join(""),
      pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern, "");
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
  }

  //8kyu-a-needle-in-a-haystack

  function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }