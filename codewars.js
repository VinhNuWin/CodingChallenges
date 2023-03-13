  //8kyu name shuffler

  function nameShuffler(str) {
    return str
      .split(" ")
      .reverse()
      .join(" ");
  }

  //8kyu All star code challenge #18

  function strCount(str, letter){  
    return str.split(letter).length-1
  }