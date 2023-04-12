

//8kyu sum without highest and lowest numbers

function sumArray(array) {
  if (!Array.isArray(array)) return 0
 return array
     .sort((a, b) => a - b)
     .slice(1, array.length - 1)
     .reduce((a, b) => a + b, 0)
 }

 //8kyu total amount of points

 const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

//8kyu beginner series #4 cockroach

const cockroachSpeed = s => Math.floor(s / 0.036);