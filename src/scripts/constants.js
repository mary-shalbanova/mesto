export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClassVisible: 'form__error_visible',
  errorSelectorTemplate: '.form__error_type_',
}

export const addCardForm = document.querySelector('.form_type_add-card');
export const editProfileForm = document.querySelector('.form_type_edit-profile');
export const addCardButton = document.querySelector('.profile__add-button');
export const editProfileButton = document.querySelector('.profile__edit-button');
export const inputName = document.querySelector('.form__input_type_name');
export const inputOccupation = document.querySelector('.form__input_type_about');
export const avatarButton = document.querySelector('.profile__edit-avatar');
export const editAvatarForm = document.querySelector('.form_type_change-avatar');
export const avatarImage = document.querySelector('.profile__avatar')

