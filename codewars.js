



  //7kyu-anagram-detection

  function isAnagram(test, original) {
    return (
      test
        .toLowerCase()
        .split("")
        .sort()
        .join("") ===
      original
        .toLowerCase()
        .split("")
        .sort()
        .join("")
    );
  }

  //8kyu-will-you-make-it

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

  //8kyu-enumerable-magic-#25-take-the-first-n-elements

  function take(arr, n) {
    return arr.slice(0, n);
  }