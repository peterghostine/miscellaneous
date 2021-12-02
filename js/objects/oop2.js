
/* A constructor function to produce a bit more complex object.
*/
function Person(first, last, age, suffix, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.suffix = suffix;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.gender + ' and ' + this.age + ' ' + this.suffix + ' old.') 
    };
    this.greeting = function() {
        console.log("Hi! I'm " + this.name.first + ' ' + this.name.last + '.');
    };    
}

let person1 = new Person('Peter', 'Ghostine', 56, 'years', 'male', 'Pool');
person1.bio();
person1.greeting();

console.log(Object.entries(person1));
console.log(Object.keys(person1));
console.log(Object.values(person1));