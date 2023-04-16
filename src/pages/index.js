import './index.css';
import {
  initialCards,
  validationConfig,
  addCardForm,
  editProfileForm,
  addCardButton,
  editProfileButton,
  inputName,
  inputOccupation,
} from '../scripts/constants.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

const profileForm = new FormValidator(editProfileForm, validationConfig);
profileForm.enableValidation();

const cardForm = new FormValidator(addCardForm, validationConfig);
cardForm.enableValidation();

const popupFullViewImage = new PopupWithImage('.popup_type_image');
popupFullViewImage.setEventListeners();

function handleCardClick(cardName, cardLink) {
  popupFullViewImage.open(cardLink, cardName);
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
  profileForm.resetValidation();
  formEditProfile.open();
  const userInfo = user.getUserInfo();
  inputName.value = userInfo.name;
  inputOccupation.value = userInfo.occupation;
});

const formAddCard = new PopupWithForm('.popup_type_add', addNewCard);
formAddCard.setEventListeners();

addCardButton.addEventListener('click', () => {
  cardForm.resetValidation();
  formAddCard.open();
});
