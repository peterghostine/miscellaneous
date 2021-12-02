/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
/* const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
} */

import { toggleHiddenElement, changeToFunkyColor } from './dom-functions.js';
// import { toggleHiddenElement as newNamedResource } from './dom-functions.js';
// import resources from './dom-functions.js';
// import { default as resources } from './dom-functions.js';
// const { toggleHiddenElement, changeToFunkyColor } = resources;

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(pElement);
});