/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];

// 1.

function filterDogOwners(arr) {
  arr.map((user) => {
    if (user.hasDog === true) {
      console.log(user.name);
    }
  });
}

filterDogOwners(users);

// filtered dog owners array

function filterDogOwnersArr(arr) {
  let newArr = [];
  arr.map((user) => {
    if (user.hasDog === true) {
      newArr.push(user.name);
    }
  });
  return newArr;
}

console.log(filterDogOwnersArr(users));

// 2.

function filterAdults(arr) {
  let adultArr = [];
  arr.map((user) => {
    if (user.age > 17) {
      adultArr.push(user);
    }
  });
  return adultArr;
}

console.log(filterAdults(users));
