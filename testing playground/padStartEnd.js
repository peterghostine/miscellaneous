function padStartEnd(inputString, maxLength, fillString = '#') {
    fillString = fillString || "$";
    return inputString.length >= maxLength ? inputString : inputString.padStart((inputString.length + maxLength) / 2,
    fillString).padEnd(maxLength, fillString);
}

String.prototype.center = padStartEnd;

let stringToPad = "help";
let paddedString = stringToPad.center(stringToPad, 10);
console.log(paddedString);


