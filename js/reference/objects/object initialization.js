//let o = {};
let o = {a: 'foo', b: 42, c: {}};


let a = 'foo', b = 42, c = {};
let p = {a: a, b: b, c: c};
let q = {c, b};
console.log(q);

let r = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
};

r.property = 'test';