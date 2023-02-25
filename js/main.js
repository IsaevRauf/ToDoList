const addTask = document.querySelector("#add_task_btn");
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup__btn");
const popupTitle = document.querySelector(".popup__title");
const popupText = document.querySelector(".popup__textarea");
const cardsList = document.querySelector(".cards__list");

addTask.addEventListener("click", function () {
  popup.classList.toggle("open");
});
const cardAdd = document.querySelector(".card__add");
cardAdd.addEventListener("click", function (e) {
  popup.classList.toggle("open");
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("popup__body")) {
    popup.classList.remove("open");
  }
});

popupBtn.addEventListener("click", function () {
  const newElement = document.createElement("div");
  const h2Element = document.createElement("h2");
  const textElement = document.createElement("p");
  const colorsElement = document.createElement("div");
  colorsElement.className = "card__colors";
  const cardCloseBtn = document.createElement("button");
  const cardCloseBtnImg = document.createElement("img");
  cardCloseBtnImg.className = "card__close-btn-img";
  cardCloseBtnImg.setAttribute("src", "images/delete-left-svgrepo-com.svg");
  cardCloseBtn.className = "card__close-btn";
  cardCloseBtn.appendChild(cardCloseBtnImg);
  newElement.className = "card";
  h2Element.className = "card__title";
  h2Element.textContent = popupTitle.value;
  textElement.className = "card__text";
  textElement.textContent = popupText.value;
  newElement.appendChild(h2Element);
  newElement.appendChild(textElement);
  newElement.appendChild(cardCloseBtn);
  cardsList.appendChild(newElement);
  popupTitle.value = "";
  popupText.value = "";
  popup.classList.remove("open");
});

const cardClose = document.querySelector(".card__close-btn");
const card = document.querySelectorAll(".card");
const cardCloseImg = document.querySelector(".card__close-btn-img");

cardsList.addEventListener("click", function (e) {
  if (e.target.className == "card__close-btn-img") {
    e.target.closest(".card").remove();
  }
});

const menuItemRemove = document.querySelector(".menu__item__remove");

menuItemRemove.addEventListener("click", function () {
  while (cardsList.children.length) {
    cardsList.children[0].remove();
  }
});
const menuSearch = document.querySelector(".menu__search");

menuSearch.addEventListener("keyup", function (e) {
  const searchedText = e.target.value.toLowerCase();
  cardsList.querySelectorAll("div").forEach((item) => {
    let newItemText = item.firstElementChild.textContent.toLowerCase();
    if (newItemText.indexOf(searchedText) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});

const menuSearch2 = document.querySelector('.menu__search__mobile')
menuSearch2.addEventListener("keyup", function (e) {
  const searchedText = e.target.value.toLowerCase();
  cardsList.querySelectorAll("div").forEach((item) => {
    let newItemText = item.firstElementChild.textContent.toLowerCase();
    if (newItemText.indexOf(searchedText) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});
