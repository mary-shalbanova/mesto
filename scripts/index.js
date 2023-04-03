import Card from './Card.js';
import { initialCards, validationConfig } from './constants.js';
import FormValidator from './FormValidator.js';

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const userNameElement = document.querySelector('.profile__name');
const userOccupationElement = document.querySelector('.profile__occupation');

const editProfileForm = editProfilePopup.querySelector('.form');
const inputName = document.querySelector('.form__input_type_name');
const inputOccupation = document.querySelector('.form__input_type_occupation');

const addCardPopup = document.querySelector('.popup_type_add');
const addCardButton = document.querySelector('.profile__add-button');
const inputCardHeading = document.querySelector('.form__input_type_card-heading');
const inputCardLink = document.querySelector('.form__input_type_card-link');

const addCardForm = addCardPopup.querySelector('.form');
const cardsContainer = document.querySelector('.cards');

const popupViewImage = document.querySelector('.popup_type_image');
const popupImage = popupViewImage.querySelector('.popup__image');
const popupImageText = popupViewImage.querySelector('.popup__image-text');

const popupList = Array.from(document.querySelectorAll('.popup'));

const formList = Array.from(document.querySelectorAll('.form'));

formList.forEach((form) => {
  const formValidator = new FormValidator(form, validationConfig);
  formValidator.enableValidation();
});

function handleEscButton(evt) {
  if (evt.key === 'Escape') {
    const openedElement = document.querySelector('.popup_opened');
    closePopup(openedElement);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscButton);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscButton);
}

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
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

function insertNewCard(card) {
  const newCard = new Card(card, '#card-template', handleCardClick);
  cardsContainer.prepend(newCard.generateCard());
}

initialCards.forEach((card) => {
  insertNewCard(card);
});

function handleCardClick (name, link, alt) {
  popupImage.src = link;
  popupImage.alt = alt;
  popupImageText.textContent = name;
  openPopup(popupViewImage);
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  userNameElement.textContent = inputName.value;
  userOccupationElement.textContent = inputOccupation.value;
  closePopup(editProfilePopup);
}

editProfileForm.addEventListener('submit', submitEditProfileForm);
addCardForm.addEventListener('submit', addNewCard);

editProfileButton.addEventListener('click', function () {
  openPopup(editProfilePopup);
  inputName.value = userNameElement.textContent;
  inputOccupation.value = userOccupationElement.textContent;
});

addCardButton.addEventListener('click', function () {
  openPopup(addCardPopup);
  addCardPopup.querySelector('.form').reset();
});
