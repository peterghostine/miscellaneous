// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]
/* Added this extra invalid card below as a demonstration of what happens  
when a credit card with an invalid first digit is encountered. */ 
const invalid6 = [0, 3, 8, 2, 4, 7, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const mystery6 = [8, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, invalid6, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6]


// Add your functions below:

function validateCred(arrCC) {

    let validation = 0;
    for (i = arrCC.length - 1; i >= 0; i--) {
      if (((arrCC.length - 1 - i) % 2) === 0) {
        validation = validation + arrCC[i];
      } else {
        const currentDigit = arrCC[i] * 2;
        validation = validation + (currentDigit > 9 ? currentDigit - 9 : currentDigit);
      }
    }
    return validation % 10 === 0 ? true : false;
  }
  
  function findInvalidCards(arrCCs) {
    
    invalidCCs = arrCCs.filter(arrCC => !validateCred(arrCC));
    return invalidCCs;
  }
  
  function idInvalidCardCompanies() {
    
  /* create 'companies' object using using first digit and name as
     key/value pairs. 
  */
    const companies = {
      3: 'Amex (American Express)',
      4: 'Visa',
      5: 'Mastercard',
      6: 'Discover',
    }
    
    // create array containing the first digit of all known credit card companies.
    const companyCodes = Object.keys(companies).map(item => item * 1);
    // Get all invalid cards.
    const invalidCards = findInvalidCards(batch);
    // Print out the names of unrecognizable companies.
    invalidCards.forEach(item => {
      if (!companyCodes.includes(item[0])) console.log('Company not found.');
    });
    // Create array containing the first digit of every invalid credit card.
    let firstDigits = [];
    invalidCards.forEach(item => firstDigits.push(item[0]));
    // Remove duplicate companies. 
    const invalidCodes = companyCodes.filter(item => firstDigits.includes(item)); 
    // Create attay containing names of companies that have issued invalid cards.
    let invalidNames = [];
    invalidCodes.forEach(item => invalidNames.push(companies[item])); 
    return invalidNames;
  }
  
  console.log(idInvalidCardCompanies());
  
  






