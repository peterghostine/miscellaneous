const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((acc, currVal) => {
  console.log('The value of accumulator: ', acc);
  console.log('The value of currentValue:', currVal);
  return acc + currVal;
}, 10)
console.log(`reduce result = ${newSum}`);

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15