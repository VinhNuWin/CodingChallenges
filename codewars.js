 //8kyu total amount of points

 const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

//8kyu beginner series #4 cockroach

const cockroachSpeed = s => Math.floor(s / 0.036);
