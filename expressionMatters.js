  // expression matters

  function expressionMatters(a,b,c){
      var r = Math.max(
        a+b+c,
        a*b*c,
        a*b+c,
        a*(b+c),
        a+b*c,
        (a+b)*c
      );
      return r //highest achievable result
    }
  