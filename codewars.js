

  //8kyu reversing words in a string

  function reverse(string) {
    return string
      .split(" ")
      .reverse()
      .join(" ");
  }

  //8kyu kjeep hydrated!

  function litres(time) {
    return Math.floor(time/2);
  }

  //8kyu Training JS #2: Basic data types--Number

  var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a= v3  //set number value to a
  var b=  v1 //set number value to b
  return a-b;
}
function equal3(){
  var a= v1  //set number value to a
  var b= v5 //set number value to b
  return a*b;
}
function equal4(){
  var a=  v4 //set number value to a
  var b=  v5 //set number value to b
  return a/b;
}
function equal5(){
  var a=  v2 //set number value to a
  var b=  v3 //set number value to b
  return a%b;
}

//8kyu switch it up!


switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
