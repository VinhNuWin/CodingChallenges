  //string ends with

  function solution(str, ending){
      let start = str.length - ending.length
      if(str.substr(start, str.length) == ending){
        return true;
      }else{
        return false;
      }
    }
  