const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const userNameElement = document.querySelector('.profile__name');
const userOccupationElement = document.querySelector('.profile__occupation');
const editProfileCloseButton = editProfilePopup.querySelector('.popup__close-button');

const editProfileForm = editProfilePopup.querySelector('.form');
const inputName = document.querySelector('.form__input_type_name');
const inputOccupation = document.querySelector('.form__input_type_occupation');

const addCardPopup = document.querySelector('.popup_type_add');
const cardTemplate = document.querySelector('#card-template').content;
const addCardCloseButton = addCardPopup.querySelector('.popup__close-button');
const addCardButton = document.querySelector('.profile__add-button');
const inputCardHeading = document.querySelector('.form__input_type_card-heading');
const inputCardLink = document.querySelector('.form__input_type_card-link');

const addCardForm = addCardPopup.querySelector('.form');
const cardsContainer = document.querySelector('.cards');

const popupViewImage = document.querySelector('.popup_type_image');
const viewImageCloseButton = popupViewImage.querySelector('.popup__close-button_type_image');
const popupImage = popupViewImage.querySelector('.popup__image');
const popupImageText = popupViewImage.querySelector('.popup__image-text');

const popupList = Array.from(document.querySelectorAll('.popup'));

function handleEscButton (evt) {
  if(evt.key === 'Escape') {
    const openedElement = document.querySelector('.popup_opened')
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
})

function createCard(card) {
  const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardName = newCard.querySelector('.cards__text');
  const cardImage = newCard.querySelector('.cards__image');
  const likeButton = newCard.querySelector('.cards__like-button');
  const deleteButton = newCard.querySelector('.cards__delete-button');
  cardName.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.alt;
  likeButton.addEventListener('click', handleLikeButton);
  deleteButton.addEventListener('click', handleDeleteButton);
  cardImage.addEventListener('click', openFullViewWindow);
  return newCard;
}

function handleLikeButton(evt) {
  evt.target.classList.toggle('cards__like-button_active');
}

function handleDeleteButton(evt) {
  evt.target.closest('.cards__item').remove();
}

function openFullViewWindow(evt) {
  const image = evt.target;
  const card = image.closest('.cards__item');
  const imageTitle = card.querySelector('.cards__text');
  popupImage.src = image.src;
  popupImage.alt = image.alt;
  popupImageText.textContent = imageTitle.textContent;
  openPopup(popupViewImage);
}

function insertNewCard(item) {
  const cardElement = createCard(item);
  cardsContainer.prepend(cardElement);
}

initialCards.forEach(function (element) {
  insertNewCard(element);
})

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
})

addCardButton.addEventListener('click', function () {
  openPopup(addCardPopup);
  addCardPopup.querySelector('.form').reset();
})
