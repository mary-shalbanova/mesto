const editProfileButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const userNameElement = document.querySelector('.profile__name');
const userOccupationElement = document.querySelector('.profile__occupation');
const closePopupButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.form');
const inputName = document.querySelector('.form__input-field_input_name');
const inputOccupation = document.querySelector('.form__input-field_input_occupation');
const submitButton = document.querySelector('.form__submit-button');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = userNameElement.textContent;
  inputOccupation.value = userOccupationElement.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  userNameElement.textContent = inputName.value;
  userOccupationElement.textContent = inputOccupation.value;
  closePopup();
}

editProfileButton.addEventListener('click', openPopup);

closePopupButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit);
