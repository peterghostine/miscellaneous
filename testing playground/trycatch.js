const myField = [
    ['░', '░', 'O'],
    ['*', 'O', '░'],
    ['░', '^', '░'],
  ];

try {
    console.log(myField[1][3]);
  } catch (e) {
    console.log('Error ' + e);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }

  console.log('End');