"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

localStorage.setItem("id", "0");

function createId() {
  let counter = +localStorage.getItem("id");
  counter++;
  localStorage.setItem("id", counter.toString());
  return counter;
}

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 0,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 0,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 0,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 0,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];
//rewiew.id = createId()
const divEl = document.querySelector(".grid");
divEl.innerHTML = initialData
  .map(
    (card) => `<div class="flex">
<h3 class="title">${card.product}</h3>
<img src="https://frutsnab.ru/wa-data/public/shop/products/17/00/17/images/33/33.518x0@2x.jpg" alt="some img" width="200"/>
<h3>Отзывы</h3>
<ul class="item-list">${card.reviews.map((rewiew) => 
  `<li> ${rewiew.id = createId()} ${rewiew.text}</li>`

      )}</ul>
<div class="error-message"></div>

<form action="#" class="flex">
  <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    class="user-input"
  ></textarea>
  <button class="add-button">Add a review</button>
</form>
</div>`
  )
  .join("");
const btnEl = document.querySelector(".add-button");
const textareaEl = document.querySelector(".user-input");
const divErrEl = document.querySelector(".error-message");
const ulEl = document.querySelector(".item-list");

btnEl.addEventListener("click", () => {
  try {
    if (textareaEl.value.length < 5 || textareaEl.value.length > 15) {
      throw new Error("Длина введенного значения не соответствует требованиям");
    }
    const liEl = document.createElement("li");
    liEl.textContent = `${createId()}  ${textareaEl.value}`;
    ulEl.append( liEl);
    //Проверить к какому товару добавляется отзыв, т.е если Узел textarea совпадает с кнопкой то добавляем отзыв в хранилище к конкретному товару
  
    textareaEl.value = "";
    divErrEl.textContent = "";
  } catch (error) {
    divErrEl.textContent = error.message;
  }
});


