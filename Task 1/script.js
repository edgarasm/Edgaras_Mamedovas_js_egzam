/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const inputEL = document.getElementById('search');
const submitBtnEl = document.getElementById('submit-btn');
const outputEl = document.getElementById('output');
const formEl = document.forms[0];

const kgToLb = inputEL.value * 2.2046;
const kgToG = inputEL.value / 0.001;
const kgToOz = inputEL.value * 35.274;

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  showResultInHtml();
});

function showResultInHtml() {
  const pEl = document.createElement('p');
  pEl.innerHTML = `${inputEL.value}kg = ${(inputEL.value * 2.2046).toFixed(
    2
  )}lb <br>`;
  pEl.innerHTML += `${inputEL.value}kg = ${(inputEL.value / 0.001).toFixed(
    0
  )}g <br>`;
  pEl.innerHTML += `${inputEL.value}kg = ${(inputEL.value * 35.274).toFixed(
    2
  )}oz`;
  outputEl.append(pEl);
}
