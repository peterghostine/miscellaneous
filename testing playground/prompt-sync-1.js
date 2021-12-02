//const prompt = require('prompt-sync')();
const prompt = require('prompt-sync')({sigint: true});

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);

const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);