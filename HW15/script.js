"use strict";
//Add your key in Unsplash!!!
const KEY = "";

const divEl = document.querySelector(".photoBox");
const divImg = document.querySelector(".img");
const iLike = document.querySelector(".likeBtn");
const imgEl = document.querySelector(".newPhoto");
const h2El = document.querySelector(".autorPhotoName");
const btnLoad = document.querySelector(".loadBtn");
const messageEl = document.querySelector(".message");
messageEl.style.color = "#ff0000";

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${KEY}`,
        },
      }
    );
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadPhotos() {
  messageEl.textContent = "";
  const responseObj = await fetchPhotos();
  if (responseObj.length === 0) {
    messageEl.textContent = "Получены неполные данные!";
    throw new Error("Получены неполные данные!");
  } else {
    imgEl.src = responseObj[0].urls.small;
    h2El.textContent = responseObj[0].user.name;
    iLike.style.opacity = 1;
  }
}

divImg.addEventListener("mouseover", () => {
  imgEl.style.outline = "3px solid #d6e929";
});

divImg.addEventListener("mouseout", () => {
  imgEl.style.outline = "none";
});

iLike.addEventListener("click", () => {
  if (iLike.classList.contains("fa-regular")) {
    iLike.classList.remove("fa-regular");
    iLike.classList.add("fa-solid");
  } else {
    iLike.classList.remove("fa-solid");
    iLike.classList.add("fa-regular");
  }
});

btnLoad.addEventListener("click", loadPhotos);
