// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

let c, d, rest1;
[c, d] = [10, 20];

console.log(c);
// expected output: 10

console.log(d);
// expected output: 20

[c, d, ...rest1] = [10, 20, 30, 40, 50];

console.log(rest1);
// expected output: Array [30,40,50]