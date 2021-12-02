const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// .some iterator. Returns TRUE if at least one element passes the test.  
const someWords = words.some((word) => {
  return word.length > 6;
});


console.log(someWords);

// .filter iterator. Returns array of words meeting criteria.
const interestingWords = words.filter(word => {
  return word.length <= 6;
} )

console.log(interestingWords);

// .every iterator. Returns TRUE if all elements meet criteria.
console.log(interestingWords.every((word) => {
  return word.length > 6; 
} ));

