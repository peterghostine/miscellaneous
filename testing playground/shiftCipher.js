// Write class below

class ShiftCipher {
    constructor(shift) {
      this._shift = shift;
    }
  
  encrypt(message) {
    message = message.toUpperCase();
    let encodedMessage = '';
    for (let i = 0; i < message.length; i++) {
      if ((message.charAt(i) >= 'A') && (message.charAt(i) <= 'Z')) {
        encodedMessage = ''.concat(encodedMessage, String.fromCharCode(((message.charCodeAt(i) + this._shift - 65) % 26) + 65));
      } else {
        encodedMessage = ''.concat(encodedMessage, message.charAt(i));
      }
    };
    return encodedMessage;
  }

  decrypt(message) {
    message = message.toLowerCase();
    let decodedMessage = '';
    for (let i = 0; i < message.length; i++) {
      if ((message.charAt(i) >= 'a') && (message.charAt(i) <= 'z')) {
        decodedMessage = ''.concat(decodedMessage, String.fromCharCode(((message.charCodeAt(i) - this._shift - 122) % 26) + 122));
      } else {
        decodedMessage = ''.concat(decodedMessage, message.charAt(i));
      }
    }
    return decodedMessage;
  }
}

/*
class ShiftCipher {
  constructor(shift) {
      this._shift = shift;
  };

  encrypt(message) {
      message = message.toUpperCase();
      let encodedMessage = '';
      for (let i of message) {
          (i.match(/[A-Z]/)) ? encodedMessage =  ''.concat(encodedMessage, String.fromCharCode(((i + this._shift - 65) % 26) + 65))
          : encodedMessage = ''.concat(encodedMessage, i);
      };
      return encodedMessage;
  };

  decrypt(message) {
      message = message.toLowerCase();
      let decodedMessage = '';
      for (let i of message) {
          (i.match(/[a-z]/)) ? decodedMessage = ''.concat(decodedMessage, String.fromCharCode(((i - this._shift - 122) % 26) + 122))
          : decodedMessage = ''.concat(decodedMessage, i);
      };
      return decodedMessage;  
  };

  test(message) {
    message = message.toLowerCase();
    let decodedMessage = '';
    for (let i of message) {
      (i.match(/[a-z]/)) ? console.log(true) : console.log(false);
    };
  };
}
*/

const cipher = new ShiftCipher(4);
let message = 'abcdefdd this 1s a t3st!!@#$++zz';
let encodedMessage = cipher.encrypt(message);
//let testMessage = cipher.test(message);
let decodedMessage = cipher.decrypt(encodedMessage);
console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);