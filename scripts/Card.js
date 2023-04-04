export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
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

    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle('cards__like-button_active');
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.cards__like-button');
    this._cardImage = this._element.querySelector('.cards__image');
    this._element.querySelector('.cards__text').textContent = this._name;
    this._cardImage.src = this._link;

    this._setEventListeners();

    return this._element;
  }
}
