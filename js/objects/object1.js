/* ------------- Shorthand method names (ES2015) -------------
   Here, we're declaring an object that has a 'property' method.
   The purpose of this method is to simply set the properties
   of the object.
*/
let o1 = {
  property(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  }
}

// Not the shorthand method (just for my own reference).

let o2 = {
  property: function(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  }
}

/* Here, we're simply invoking the 'property' method to set the 
   values of the object's properties.
*/    
let a = 1, b = 2, c = 5;
o1.property(a, b, c);
console.log(Object.entries(o1));
o2.property(a, b, c);
console.log(Object.entries(o2));

/* Here, we're creating a new object by using an existing object (the prototype).
   We're also setting the new object's properties.
*/
// let o3 = Object.create(o1);
let o3 = new Object(o1);
a = 5, b = 6, c = 7;
o3.property(a, b, c);
console.log(Object.entries(o3))

/* Here, we're creating a new object that has a single property.
*/
const object1 = {property1: 50};

/* We're then using the built-in defineProperties method to define 
   new property/value pairs on the object.  
*/
Object.defineProperties(object1, {
  property2: {
    value: 41,
    enumerable: true,
    writable: true
  },
  property3: {
      value: 77,
      enumerable: true,
      writable: true
  }
});

console.log(Object.entries(object1));
console.log(object1);
