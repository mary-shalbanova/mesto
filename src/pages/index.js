import './index.css';
import {
  validationConfig,
  addCardForm,
  editProfileForm,
  addCardButton,
  editProfileButton,
  inputName,
  inputOccupation,
  avatarButton,
  editAvatarForm,
  avatarImage,
} from '../scripts/constants.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';

const user = new UserInfo({
  userNameSelector: '.profile__name',
  userOccupationSelector: '.profile__occupation',
  userAvatarSelector: '.profile__avatar',
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'b732f751-073e-4fb6-8191-49059a9131b3',
    'Content-Type': 'application/json',
  },
});

let userId;

api
  .getInitialInfo()
  .then((data) => {
    const [userInfo, cardList] = data;
    user.setUserInfo(userInfo);
    userId = userInfo._id;
    section.renderItems(cardList);
  })
  .catch((err) => {
    console.error(err);
  });

function handleDeleteIconClick(card) {
  function deleteCard() {
    api
      .deleteCard(card.cardId)
      .then(() => {
        card.handleDeleteCard();
        popupWithDeleteConfirmation.close();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  popupWithDeleteConfirmation.setSubmitAction(deleteCard);
  popupWithDeleteConfirmation.open();
}

function handleLikeClick(card) {
  if (card.isLiked()) {
    api
      .deleteLike(card.cardId)
      .then((res) => {
        card.removeLike();
        card.countLikes(res);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    api
      .putLike(card.cardId)
      .then((res) => {
        card.setLike();
        card.countLikes(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function handleCardClick(cardName, cardLink) {
  popupFullViewImage.open(cardLink, cardName);
}

function createCard(item) {
  const newCard = new Card(
    item,
    '#card-template',
    handleCardClick,
    handleDeleteIconClick,
    handleLikeClick,
    userId
  );
  const card = newCard.generateCard();
  return card;
}

function rendererCard(item) {
  section.addItem(createCard(item));
}

const section = new Section(
  {
    renderer: rendererCard,
  },
  '.cards'
);

const profileForm = new FormValidator(editProfileForm, validationConfig);
profileForm.enableValidation();

const cardForm = new FormValidator(addCardForm, validationConfig);
cardForm.enableValidation();

const avatarForm = new FormValidator(editAvatarForm, validationConfig);
avatarForm.enableValidation();

const popupFullViewImage = new PopupWithImage('.popup_type_image');
popupFullViewImage.setEventListeners();

const popupWithDeleteConfirmation = new PopupWithConfirmation(
  '.popup_type_delete'
);
popupWithDeleteConfirmation.setEventListeners();

function editProfileInfo(formData) {
  formEditProfile.renderLoading(true);
  api
    .editProfileInfo(formData)
    .then((data) => {
      user.setUserInfo(data);
      formEditProfile.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      formEditProfile.renderLoading(false);
    });
}

const formEditProfile = new PopupWithForm('.popup_type_edit', editProfileInfo);
formEditProfile.setEventListeners();

editProfileButton.addEventListener('click', () => {
  profileForm.resetValidation();
  formEditProfile.open();
  const userInfo = user.getUserInfo();
  inputName.value = userInfo.name;
  inputOccupation.value = userInfo.about;
});

function addNewCard(formData) {
  formAddCard.renderLoading(true);
  api
    .addNewCard(formData)
    .then((data) => {
      rendererCard(data);
      formAddCard.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      formAddCard.renderLoading(false);
    });
}

const formAddCard = new PopupWithForm('.popup_type_add', addNewCard);
formAddCard.setEventListeners();

addCardButton.addEventListener('click', () => {
  cardForm.resetValidation();
  formAddCard.open();
});

function changeAvatar(image) {
  formChangeAvatar.renderLoading(true);
  api
    .changeAvatar(image.link)
    .then((data) => {
      avatarImage.src = data.avatar;
      formChangeAvatar.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      formChangeAvatar.renderLoading(false);
    });
}

const formChangeAvatar = new PopupWithForm(
  '.popup_type_change-avatar',
  changeAvatar
);
formChangeAvatar.setEventListeners();

avatarButton.addEventListener('click', () => {
  avatarForm.resetValidation();
  formChangeAvatar.open();
});
