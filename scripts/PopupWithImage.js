import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor (popupSelector, CardName, CardLink) {
    super(popupSelector)
    this._popupName = CardName;
    this._popupLink = CardLink;
  }

  open () {
    this._popup.querySelector('.popup__image').src = this._popupLink;
    this._popup.querySelector('.popup__image-text').textContent = this._popupName;
    super.open();
  }
}
