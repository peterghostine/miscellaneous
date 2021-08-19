let _ = {};

_.clamp = function(num, lbound, ubound) {

    /*
    if (num < lbound) {
        return lbound;
    } else if (num > ubound) {
        return ubound;
    } else {
        return num;
    }
*/
    return Math.min(Math.max(num, lbound), ubound);
}

_.inRange = function(num, lbound, ubound) {
 
    if (isNaN(ubound)) { 
        ubound = lbound; lbound = 0;   
    };
    if (lbound > ubound) {
        const a = lbound; lbound = ubound; ubound = a; 
    };
    if (num < lbound || num >= ubound) {
        return false;
        } else {
            return true;
    };
}

_.words = function(str) {

    return arr = str.split(' ').filter(item => item.trim() != '');
}

_.pad = function(str, len) {

    if (str.length >= len) {
        return str;
    } else {
        let strPadding = Math.floor((len - str.length) /2);
        return str.padStart(str.length + strPadding).padEnd(len);
    }
}

_.has = function(obj, key) {

    return obj[key] ? true : false;
  }

_.invert = function(obj) {

    let obj2 = {};
    Object.entries(obj).forEach(keyValPair => {
        obj2[keyValPair[1]] = keyValPair[0];
    })   
    return obj2;
}

_.findKey = function(obj, func) {

    let key;
    for (property in obj) {
        if (func(obj[property])) {
            key = property;
            break;
        };    
    };
    return key;
}

_.drop = function(arr, num) {

    if (!num) num = 1;
    return arr.slice(num);
}
 /*
_.dropWhile = function(arr, func) {

    let splicedArr = arr;
    for (i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            splicedArr = _.drop(splicedArr, 1);
        } else break;
    }
    return splicedArr;
}
*/

_.dropWhile = function(arr, func) {

    let i = arr.findIndex((element, index) => !func(element, index, arr));

    return _.drop(arr, i);
}

function indexIsSmallerThanElement(element, index, arr) {

    if (index < element) {
        return true;
    } else {
        return false;
    }
}

_.chunk = function(arr, size) {

    let newArr = [];
    const arrLen = arr.length;
    const lastChunk = arrLen % size;
    const newArrLen = Math.floor(arrLen / size) + ((lastChunk) ? 1 : 0);
    for (i = 0; i < newArrLen; i++) {
        newArr.push(arr.slice(i * size, (i + 1) * size));
    }
    return newArr;
}

//
console.log(_.inRange(7, 8));

//
console.log(Object.entries(_));

//
console.log(_.words('here comes  the rabbit.'));

//
console.log(_.pad('here comes the rabbit.', 30));

//
console.log(_.invert({key1: "val1", key2: "val2"}));

//
var users = {
    key1: false,
    key2: false,
    key3: false
  };

function isValTruthy(val) {
    return val? true : false;
}

console.log(_.findKey(users, isValTruthy));  

//
const users2 = ['Peter', 'Paul', 'Marie'];
console.log(_.drop(users2, 4));

//
const numbers = [1, 2, 3, 4, 5];
console.log(_.chunk(numbers, 5));

//
const numbers2 = [1, 2, 0, 4];
console.log(indexIsSmallerThanElement(1, 0, numbers2));
console.log(numbers2.findIndex(indexIsSmallerThanElement));

//
console.log(_.dropWhile(numbers, indexIsSmallerThanElement));

// Do not write or modify code below this line.
module.exports = _;
