//7kyu-No-Oddities-Here

var noOdds = (values) => values.filter((x) => x % 2 === 0);

//7kyu-the-coupon-code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
}

//8kyu-Is-It-Even?

function testEven(n) {
  return n % 2 == 0;
}
