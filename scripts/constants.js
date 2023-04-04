export const initialCards = [
  {
    name: 'Владивосток',
    link: './images/Vladivostok.jpg',
  },
  {
    name: 'Дагестан',
    link: './images/Dagestan.jpg',
  },
  {
    name: 'Переславль-Залесский',
    link: './images/Pereslavl.jpg',
  },
  {
    name: 'Санкт-Петербург',
    link: './images/Saint-Petersburg.jpg',
  },
  {
    name: 'Сочи',
    link: './images/Sochi.jpg',
  },
  {
    name: 'Тюмень',
    link: './images/Tyumen.jpg',
  },
];

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClassVisible: 'form__error_visible',
  errorSelectorTemplate: '.form__error_type_',
}
