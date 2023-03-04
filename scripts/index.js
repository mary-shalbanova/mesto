const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const userNameElement = document.querySelector(".profile__name");
const userOccupationElement = document.querySelector(".profile__occupation");
const editProfileCloseButton = editProfilePopup.querySelector(".popup__close-button");

const formElement = editProfilePopup.querySelector(".form");
const inputName = document.querySelector(".form__input-field_input_name");
const inputOccupation = document.querySelector(".form__input-field_input_occupation");
const submitButton = document.querySelector(".form__submit-button");

const addCardPopup = document.querySelector(".popup_type_add");
const addCardCloseButton = addCardPopup.querySelector(".popup__close-button");
const addCardButton = document.querySelector(".profile__add-button");
const inputCardHeading = document.querySelector(".form__input-field_input_card-heading");
const inputCardLink = document.querySelector(".form__input-field_input_card-link");

const addCardForm = addCardPopup.querySelector(".form");
const cardContainer = document.querySelector(".cards");

const popupViewImage = document.querySelector(".popup_type_image");
const viewImageCloseButton = popupViewImage.querySelector(".popup__close-button_type_image");

const initialCards = [
  {
    name: "Владивосток",
    link: "./images/Vladivostok.jpg",
    alt: "Владивосток",
  },
  {
    name: "Дагестан",
    link: "./images/Dagestan.jpg",
    alt: "Сулакский каньон",
  },
  {
    name: "Переславль-Залесский",
    link: "./images/Pereslavl.jpg",
    alt: "Переславль-Залесский",
  },
  {
    name: "Санкт-Петербург",
    link: "./images/Saint-Petersburg.jpg",
    alt: "Двор-колодец",
  },
  {
    name: "Сочи",
    link: "./images/Sochi.jpg",
    alt: "Санаторий им.Орджоникидзе",
  },
  {
    name: "Тюмень",
    link: "./images/Tyumen.jpg",
    alt: "Памятник В.В.Ленину",
  },
];

function createCard(card) {
  const newCard = document.querySelector("#card-template").content.cloneNode(true);
  const cardName = newCard.querySelector(".cards__text");
  const cardImage = newCard.querySelector(".cards__image");
  const likeButton = newCard.querySelector(".cards__like-button");
  const deleteButton = newCard.querySelector(".cards__delete-button");
  cardName.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.alt;
  likeButton.addEventListener("click", handleLikeButton);
  deleteButton.addEventListener("click", handledeleteButton);
  cardImage.addEventListener("click", openFullViewWindow);
  return newCard;
}

function handleLikeButton(evt) {
  evt.target.classList.toggle("cards__like-button_active");
}

function handledeleteButton(evt) {
  evt.target.closest(".cards__item").remove();
}

function openFullViewWindow(evt) {
  const image = evt.target;
  const popupImage = document.querySelector(".popup__image");
  const popupImageText = document.querySelector(".popup__image-text");
  popupImage.src = image.src;
  popupImageText.textContent = image.alt;
  openPopup(popupViewImage);
}

function insertNewCard(item) {
  const cardElement = createCard(item);
  cardContainer.prepend(cardElement);
}

initialCards.forEach(function (element) {
  insertNewCard(element);
});

function addNewCard(evt) {
  evt.preventDefault();
  const cardItem = {
    name: inputCardHeading.value,
    link: inputCardLink.value,
    alt: `Фотография ${inputCardHeading.value}`,
  };
  insertNewCard(cardItem);
  closePopup(addCardPopup);
  evt.target.reset();
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  userNameElement.textContent = inputName.value;
  userOccupationElement.textContent = inputOccupation.value;
  closePopup(editProfilePopup);
}

formElement.addEventListener("submit", handleFormSubmit);
addCardForm.addEventListener("submit", addNewCard);

editProfileButton.addEventListener("click", function () {
  openPopup(editProfilePopup);
  inputName.value = userNameElement.textContent;
  inputOccupation.value = userOccupationElement.textContent;
});

editProfileCloseButton.addEventListener("click", function () {
  closePopup(editProfilePopup);
});

addCardButton.addEventListener("click", function () {
  openPopup(addCardPopup);
});

addCardCloseButton.addEventListener("click", function () {
  closePopup(addCardPopup);
});

viewImageCloseButton.addEventListener("click", function () {
  closePopup(popupViewImage);
});
