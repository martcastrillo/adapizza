"use strict";

const newForm = document.querySelector('.js-new-form');
const pizzaList = document.querySelector('.js-list');

const pizzaImage1 = "./img/top-view-pizza-with-chicken-green-chili-pepper-tomatoes-cheese-table.jpg";
const pizzaName1 = "Viva Mexico";
const pizzaOrigin1 = "Tijuana";
const pizzaDesc1 = " Chicken and green chili pepper";

const pizzaImage2 = "./img/top-view-chicken-pizza-with-yellow-cherry-tomatoes-bell-pepper-board.jpg";
const pizzaName2 = "Baby tomato";
const pizzaOrigin2 = "Napoli";
const pizzaDesc2 = "Chicken with yellow cherry tomatoes";

const pizzaImage3 = "./img/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden.jpg";
const pizzaName3 = "Gimme mushroom";
const pizzaOrigin3 = "Santorini";
const pizzaDesc3 = "Pepperoni with mushroom and olives";

const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_origin = document.querySelector('.js_in_search_origin');


const plusBtn = document.querySelector('.js_plus_btn');
const btnAdd = document.querySelector('.js-btn-add');
const btnCancell = document.querySelector('.js-btn-cancell');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputOrigin = document.querySelector('.js-input-origin');
const labelMesageError = document.querySelector('.js-label-error');
const errorSearchMessage = document.querySelector('.js_error_search_message');
const btnSearch = document.querySelector('.js_btn_search');

const pizza1 = `<li class="card">
<article>
  <img class="card_img" src="${pizzaImage1}"
    alt="siames-cat" />
  <h3 class="card_title">${pizzaName1.toUpperCase()}</h3>
  <h4 class="card_race">${pizzaOrigin1}</h4>
  <p class="card_description">
  ${pizzaDesc1}
  </p>
</article>
</li>`;
const pizza2 = `<li class="card">
<article>
  <img class="card_img" src="${pizzaImage2}"
    alt="siames-cat" />
  <h3 class="card_title">${pizzaName2.toUpperCase()}</h3>
  <h4 class="card_race">${pizzaOrigin2}</h4>
  <p class="card_description">
  ${pizzaDesc2}
  </p>
</article>
</li>`;
const pizza3 = `<li class="card">
<article>
  <img class="card_img" src="${pizzaImage3}"
    alt="siames-cat" />
  <h3 class="card_title">${pizzaName3.toUpperCase()}</h3>
  <h4 class="card_race">${pizzaOrigin3}</h4>
  <p class="card_description">
  ${pizzaDesc3}
  </p>
</article>
</li>`;

function renderPizza() {
  const list = pizza1 + pizza2 + pizza3;
  pizzaList.innerHTML += list;
}
renderPizza();


const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
const valueOrigin = inputOrigin.value;

function showNewPizzaForm() {
  newForm.classList.remove('collapsed');
}
function hideNewPizzaForm() {
  newForm.classList.add('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  inputOrigin.value = '';
}

function handleClickPlusBtn(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewPizzaForm();
  } else {
    hideNewPizzaForm();
  }
}
function addNewPizza(url, desc, name, origin) {

  pizzaList.innerHTML += `<li class="card">
    <article>
      <img class="card_img" src="${url}"
        alt="pizza" />
      <h3 class="card_title">${name}</h3>
      <h4 class="card_race">${origin}</h4>
      <p class="card_description">
      ${desc}
      </p>
    </article>
    </li>`;


}
function handleClickbtnAdd(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueOrigin = inputOrigin.value;
  if (inputDesc === '' || inputPhoto === '' || inputName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores.';

  }
  else {
    addNewPizza(inputPhoto.value, inputDesc.value, inputName.value, inputOrigin.value);
  }
}




function renderSearch(descrSearchText) {
  pizzaList.innerHTML = '';
  if (pizzaDesc1.toLowerCase().includes(descrSearchText)) {
    pizzaList.innerHTML += pizza1;
  }
  if (pizzaDesc2.toLowerCase().includes(descrSearchText)) {
    pizzaList.innerHTML += pizza2;
  }
  if (pizzaDesc3.toLowerCase().includes(descrSearchText)) {
    pizzaList.innerHTML += pizza3;
  }
}
const renderOrigin = (originSearchValue) => {
  pizzaList.innerHTML = '';
  if ((pizzaOrigin1.toLowerCase().includes(originSearchValue))) {
    pizzaList.innerHTML += pizza1;
  }
  if ((pizzaOrigin2.toLowerCase().includes(originSearchValue))) {

    pizzaList.innerHTML += pizza2;
  }
  if ((pizzaOrigin3.toLowerCase().includes(originSearchValue))) {

    pizzaList.innerHTML += pizza3;
  }
 
}

const handleClickSearchBtn = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value.toLowerCase().trim();
const originSearchValue = input_search_origin.value.toLowerCase().trim();
 if( originSearchValue === '' && descSearchValue === ''){
 
    errorSearchMessage.innerHTML = 'Debe rellenar algún valor.';
  }
  else {
    renderSearch(descrSearchText);
    renderOrigin(originSearchValue);
  }
}



  const handleClickBtnCancell = (event) => {
    event.preventDefault();
    inputDesc.value = '';
    inputPhoto.value = '';
    inputName.value = '';
    inputOrigin.value = '';
  };



  btnCancell.addEventListener('click', handleClickBtnCancell);

  
  
  
  
  
  
  //btnSearch.addEventListener('click', handleClickSearchBtn);

  plusBtn.addEventListener('click', handleClickPlusBtn);

  btnAdd.addEventListener('click', handleClickbtnAdd);