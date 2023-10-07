// 8kyu-grasshopper-array-mean

var findAverage = function (nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};

// 8kyu-remove-first-and-last-character-part-2

function array(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}

//8kyu-price-of-mangoes

function mango(quantity, price) {
  let q = Math.floor(quantity / 3);
  return (quantity - q) * price;
}

//6kyu-encrypt-this

var encryptThis = function (str) {
  if (str === "") {
    return "";
  } else {
    let s = str.split(" ");
    let x = s.map((element) => {
      let a = element.split("");
      a[0] = element.charCodeAt(0);
      [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
      return a.join("");
    });
    return x.join(" ");
  }
};

//8kyu-function-2-squaring-an-argument

const square = (a) => Math.pow(a, 2);
