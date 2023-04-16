import '../pages/index.css';
import {
  initialCards,
  validationConfig,
  addCardForm,
  editProfileForm,
  addCardButton,
  editProfileButton,
  inputName,
  inputOccupation,
  formList,
} from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

formList.forEach((form) => {
  const formValidator = new FormValidator(form, validationConfig);
  formValidator.enableValidation();
});

function handleCardClick(cardName, cardLink) {
  const popupFullViewImage = new PopupWithImage(
    '.popup_type_image',
    cardName,
    cardLink
  );
  popupFullViewImage.open();
  popupFullViewImage.setEventListeners();
}

function rendererCard(item) {
  const newCard = new Card(item, '#card-template', handleCardClick);
  const cardElement = newCard.generateCard();
  section.addItem(cardElement);
}

const section = new Section(
  { items: initialCards, renderer: rendererCard },
  '.cards'
);
section.renderItems();

const user = new UserInfo({
  userNameSelector: '.profile__name',
  userOccupationSelector: '.profile__occupation',
});

function editProfileInfo(formData) {
  user.setUserInfo(formData);
}

function addNewCard(formData) {
  rendererCard(formData);
}

const formEditProfile = new PopupWithForm('.popup_type_edit', editProfileInfo);
formEditProfile.setEventListeners();

editProfileButton.addEventListener('click', () => {
  const profileForm = new FormValidator(editProfileForm, validationConfig);
  profileForm.resetValidation();
  formEditProfile.open();
  const userInfo = user.getUserInfo();
  inputName.value = userInfo.name;
  inputOccupation.value = userInfo.occupation;
});

const formAddCard = new PopupWithForm('.popup_type_add', addNewCard);
formAddCard.setEventListeners();

addCardButton.addEventListener('click', () => {
  const cardForm = new FormValidator(addCardForm, validationConfig);
  cardForm.resetValidation();
  formAddCard.open();
});
