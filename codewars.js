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
