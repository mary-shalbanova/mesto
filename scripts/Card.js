export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.cards__item')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector('.cards__delete-button')
      .addEventListener('click', () => {
        this._handleDeleteCard();
      });
    this._element
      .querySelector('.cards__like-button')
      .addEventListener('click', () => {
        this._handleLikeCard();
      });

    this._element
      .querySelector('.cards__image')
      .addEventListener('click', () => {
        this._handleCardClick(this._name, this._link, this._alt)
      });
  }

  _handleLikeCard() {
    this._element
      .querySelector('.cards__like-button')
      .classList.toggle('cards__like-button_active');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.cards__text').textContent = this._name;
    this._element.querySelector('.cards__image').src = this._link;
    this._element.querySelector('.cards__image').alt = this._alt;

    return this._element;
  }
}
