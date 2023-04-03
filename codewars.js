//6kyu two sum

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) return [i, j];
      }
    }
  }

  //8kyu drink about

  function peopleWithAgeDrink(old) {
    if (old>=21)return "drink whisky";
    if (old<14)return"drink toddy"
    if (old<18)return"drink coke"
    if (old<21)return"drink beer"
  };

  //8kyu multiplication table for number

  function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
  }

  //8kyu cat years, dog years

  const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    (humanYears - 1 ? 16 : 11) + 4 * humanYears,
    (humanYears - 1 ? 14 : 10) + 5 * humanYears
  ];

  //8kyu Vowel remover

  function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}