export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteIconClick, handleLikeClick, userId) {
    this._name = data.name;
    this._link = data.link;
    this._like = data.likes;
    this._userId = userId;
    this._cardOwnerId = data.owner._id;
    this.cardId = data._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.cards__item')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {

    if (this._element.contains(this._deleteButton)) {
      this._deleteButton.addEventListener('click', () => {
        this._handleDeleteIconClick(this);
      });
    }

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _likedCard() {
    this._likesCounter.textContent = this._like.length;
    if (this.isLiked()) {
      this._likeButton.classList.add('cards__like-button_active');
    };
  }

  isLiked () {
    return this._like.some((element) => element._id === this._userId)
  }

  setLike () {
    this._likeButton.classList.add('cards__like-button_active');
  }

  removeLike() {
    this._likeButton.classList.remove('cards__like-button_active');
  }

  handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  countLikes(data) {
    this._like = data.likes;
    this._likesCounter.textContent = data.likes.length;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.cards__like-button');
    this._likesCounter = this._element.querySelector('.cards__like-counter');
    this._cardImage = this._element.querySelector('.cards__image');
    this._element.querySelector('.cards__text').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._deleteButton = this._element.querySelector('.cards__delete-button')

    if (this._userId!== this._cardOwnerId) {
      this._deleteButton.remove();
    }

    this._likedCard()

    this._setEventListeners();

    return this._element;
  }
}
