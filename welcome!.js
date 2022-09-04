// Think of a way to store the languages as a database (eg an object). The Languages are listed  below so you can copy and paste!

function greet(language){
      const lang = [
            {
                  english: 'Welcome',
                  czech: 'Vitejte',
                  danish: 'Velkomst',
                  dutch: 'Welkam',
                  estonian: 'Tere tulemast',
                  finnish: 'Tervetuloa',
                  flemish: 'Welgekomen',
                  french: 'Bienvenue',
                  german: 'Willkommen',
                  irish: 'Failte',
                  italian: 'Benvenuto',
                  latvian: 'Gaidits',
                  lithuanian: 'Laukiamas',
                  polish: 'Witamy',
                  spanish: 'Bienvenido',
                  swedish: 'Valkommen',
                  welsh: 'Croeso',
            }
      ]
      return lang[0][language]=== underfined ?
      'Welcome' : lang[0][language];
}