const numbers = [2, 7, 9, 171, 52, 33, 14];

// Arrow function takes a numeric parameter and returns the square of the number.
const toSquare = num => num * num;

// Arrow function takes a numeric array and returns an array of the squared numbers. 
const squareNums = numArr => {
  return numArr.map(toSquare);
}

console.log(squareNums(numbers));

// Arrow function takes two arrays of strings and returns an array containing only the elements of Arr1 that exit in Arr2.
const justCoolStuff = (strArr1, strArr2) => {
  return strArr1.filter(stuff => {
    return strArr2.includes(stuff)
  });
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
