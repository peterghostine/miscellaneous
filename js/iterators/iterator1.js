/* Demonstrates the use of the forEach iterator. 
*/
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

/* Same, but using a callback function.
artists.forEach(favoriteArtist);

function favoriteArtist(artist) {
  console.log(artist + ' is one of my favorite artists.');
}
*/

/* Arrow function notation.
artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
  });
*/

// Demonstrates the use of .map iterator.

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

const squareNumbers3 = numbers.map(squareNum);

function squareNum(num) {
  return num * num;
}

console.log(squareNumbers, squareNumbers2, squareNumbers3);

// Demonstrates the use of .filter iterator.

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing != 'number';
});

console.log(onlyNumbers);