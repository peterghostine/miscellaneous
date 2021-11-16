/* This is a 'factory' function that accepts a 'name' property as a parameter.
   It creates an object that has a 'name' property and a 'greeting' method.
*/
function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
      console.log("Hi! I'm " + obj.name + ".");
    };
    return obj;
  }

const salva = createNewPerson('Salva');
// salva.name;
console.log(salva.name);
salva.greeting();

/* This is what is known as a 'constructor' function.
   It achieves the same thing as the above.
   Constructor function names begin with a capital letter.
*/ 

function Person(name) {
  this.name = name;
  this.greeting = function() {
    console.log("Hi! I'm " + this.name + ".");
  };
}

/* This is how the constructor function is invoked
to create a new object.
*/
let person1 = new Person('Bob');
let person2 = new Person('Sarah');

console.log(person1.name);
person1.greeting();
console.log(person2.name);
person2.greeting();