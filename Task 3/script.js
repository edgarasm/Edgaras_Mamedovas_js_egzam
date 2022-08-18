/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const btnEl = document.getElementById('btn');
const outputEl = document.getElementById('output');
const messageEl = document.getElementById('message');

btnEl.addEventListener('click', () => {
  messageEl.remove();
  getUsersAndGenerateList();
});

async function getUsersAndGenerateList() {
  const users = await getUsersFromApi(ENDPOINT);
  generateList(users);
}

async function getUsersFromApi(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw 'something went wrong!';
  const users = await resp.json();
  // console.log('users ===', users);
  return users;
}

function generateList(users) {
  users.forEach((user) => {
    const divEl = document.createElement('div');
    divEl.classList.add('card');
    divEl.innerHTML = `<img src="${user.avatar_url}" alt="${user.login}-avatar"> <h3>${user.login}</h3>`;
    outputEl.append(divEl);
  });
}
