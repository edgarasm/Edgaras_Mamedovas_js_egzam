/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formEl = document.forms[0];
const inputEL = document.getElementById('search');
const submitBtnEl = document.getElementById('submit-btn');
const outputEl = document.getElementById('output');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  outputEl.innerHTML = '';
  showResultInHtml();
});

function showResultInHtml() {
  outputEl.innerHTML = `
  <p>${inputEL.value} kg = ${(inputEL.value * 2.2046).toFixed(2)} lbs</p>
  <p>${inputEL.value} kg = ${(inputEL.value / 0.001).toFixed(0)} g</p>
  <p>${inputEL.value} kg = ${(inputEL.value * 35.274).toFixed(2)} oz</p>`;
}
