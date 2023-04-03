export const initialCards = [
  {
    name: 'Владивосток',
    link: './images/Vladivostok.jpg',
    alt: 'Владивосток',
  },
  {
    name: 'Дагестан',
    link: './images/Dagestan.jpg',
    alt: 'Сулакский каньон',
  },
  {
    name: 'Переславль-Залесский',
    link: './images/Pereslavl.jpg',
    alt: 'Переславль-Залесский',
  },
  {
    name: 'Санкт-Петербург',
    link: './images/Saint-Petersburg.jpg',
    alt: 'Двор-колодец',
  },
  {
    name: 'Сочи',
    link: './images/Sochi.jpg',
    alt: 'Санаторий им.Орджоникидзе',
  },
  {
    name: 'Тюмень',
    link: './images/Tyumen.jpg',
    alt: 'Памятник В.В.Ленину',
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
