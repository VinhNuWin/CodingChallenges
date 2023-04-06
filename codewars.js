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