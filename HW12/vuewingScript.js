"use strict";

const divEl = document.querySelector(".content");

function getReviewsList() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const element = document.createElement("h3");
    const btn = document.createElement("button");
    btn.classList.add("show");
    const divForP = document.createElement("div");
    element.textContent = key;
    btn.textContent = "Show review";
    const divRroduct = document.createElement("div");
    divEl.append(divRroduct);
    divRroduct.append(element, divForP, btn);

    // divEl.innerHTML += `<div><h3 class="title">${key}</h3><button class="show">Show review</button><p></p><button>"удалить"</button></div>`;
  }
}
getReviewsList();

const btnEls = document.querySelectorAll(".show");
btnEls.forEach((btnShow) =>
  btnShow.addEventListener("click", (event) => {
    const divForP = event.target.previousSibling;
    const h3El = event.target.previousSibling.previousSibling;
    if (btnShow.textContent === "Show review") {
      btnShow.textContent = "Hide review";
      addBtnDelete(divForP, h3El);
    } else {
      btnShow.textContent = "Show review";
      divForP.textContent = "";
    }
  })
);

function addBtnDelete(divForP, h3El) {
  const arrayReviews = getArrFromReviews(h3El.textContent);
  for (let index = 0; index < arrayReviews.length; index++) {
    const review = document.createElement("p");
    const btnDel = document.createElement("button");
    btnDel.textContent = "удалить";
    btnDel.classList.add("delete");
    review.textContent = arrayReviews[index];
    divForP.append(review, btnDel);
  }
  const btnDeleteEls = document.querySelectorAll(".delete");
  btnDeleteEls.forEach((button) =>
    button.addEventListener("click", (event) => {
      const reviewForDelete = event.target.previousSibling;
      const index = arrayReviews.indexOf(reviewForDelete.textContent);
      arrayReviews.splice(index, 1);
      localStorage.setItem(h3El.textContent, arrayReviews);
      reviewForDelete.remove();
      button.remove();
      if (listPreviewsIsEmpty(h3El.textContent)) {
        localStorage.removeItem(h3El.textContent);
        h3El.parentNode.remove();
      }
    })
  );
}

function getArrFromReviews(nameProduct) {
  return localStorage.getItem(nameProduct).split(",");
}

function listPreviewsIsEmpty(productName) {
  return localStorage.getItem(productName).length === 0;
}
