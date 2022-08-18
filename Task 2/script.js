/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// get elements

const btnEl = document.getElementById('btn__element');
const btnStateEl = document.getElementById('btn__state');

let counter = 0;

// listener for clicks

btnEl.addEventListener('click', () => {
  counter++;
  btnStateEl.innerHTML = counter;
});
