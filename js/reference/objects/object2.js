/* Here, we're creating an object that has properties and methods.
*/
const person = {
    nickname: 'HAL9000',
    isHuman: false,
    printIntroduction: function() {
      // console.log(`My nickname is ${this.nickname}. Am I human? ${this.isHuman}`);
      return `My nickname is ${this.nickname}. I am ${this.isHuman ? '' : 'not '}human.`;
    },
    get intro() {
      isHuman = this.isHuman ? '' : 'not '; 
      return `Hi! My nickname is ${this.nickname}. I am ${isHuman}human.`;
    }
  };
  
const introduction = person.printIntroduction();
console.log(introduction);

  /* Here, a new object is created, using the 'person' object as a prototype.
  */ 
  const me = Object.create(person);
  const bro = new Object(person);
  // me.nickname = 'Ghost'; // "nickname" is a property set on "me", but not on "person"
  me.nickname = 'Ghost';
  me.isHuman = true; // inherited properties can be overwritten
  bro.nickname = 'Paul';
  me.isHuman = false; // inherited properties can be overwritten
  // const intro = me.printIntroduction();
  const intro = bro.intro;
  console.log(intro);
  // expected output: "My nickname is Ghost. Am I human? true"