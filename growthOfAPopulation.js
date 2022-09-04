  //growth of a population

  function nbYear(p0, percent, aug, p){
      //initialise array
      var finalCatch = [];
      //early conversion
      var percent = percent/100;
      //looping through
      for(var p0; p0<p; p0+=p0*percent+aug){
        currValue = p0 + p0 * percent + aug;
        finalCatch.push(currValue);
      }
      return finalCatch.length
    }
  