







//8kyu-abbreviate-a-two-work-name

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}