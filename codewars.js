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