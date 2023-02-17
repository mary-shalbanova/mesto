const editProfileButton = document.querySelector(".profile__edit-button");

editProfileButton.addEventListener("click", openPopup);

const popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.add("popup_opened");
  inputName.value = userNameElement.textContent;
  inputOccupation.value = userOccupationElement.textContent;
}

const userNameElement = document.querySelector(".profile__name");
const userOccupationElement = document.querySelector(".profile__occupation");

userNameElement.textContent = "Жак-Ив Кусто";
userOccupationElement.textContent = "Исследователь океана";

const closePopupButton = document.querySelector(".popup__close-button");

closePopupButton.addEventListener("click", closePopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}

const formElement = document.querySelector('[name="edit-profile"]');
const inputName = document.querySelector('[name="input-name"]');
const inputOccupation = document.querySelector('[name="input-occupation"]');

inputName.value = userNameElement.textContent;
inputOccupation.value = userOccupationElement.textContent;

function handleFormSubmit(evt) {
  evt.preventDefault();
  userNameElement.textContent = inputName.value;
  userOccupationElement.textContent = inputOccupation.value;
}

formElement.addEventListener("submit", handleFormSubmit);

const submitButton = document.querySelector(".form__submit-button");
submitButton.addEventListener("click", closePopup);
