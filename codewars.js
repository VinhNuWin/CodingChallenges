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
