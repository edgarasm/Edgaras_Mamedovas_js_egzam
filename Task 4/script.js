/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const outputEl = document.getElementById('output');

async function getCars() {
  const resp = await fetch(ENDPOINT);
  const cars = await resp.json();
  console.log('cars ===', cars);
  showCars(cars);
}

function showCars(carsArr) {
  // div for each brand
  carsArr.forEach((car) => {
    const divEl = document.createElement('div');
    divEl.classList.add('card');
    divEl.innerHTML = `<h3>${car.brand}</h3>`;
    // map models
    car.models.map((model) => {
      const liEl = document.createElement('li');
      liEl.innerHTML += model;
      divEl.append(liEl);
    });
    // append to output element
    outputEl.append(divEl);
  });
}

getCars();
