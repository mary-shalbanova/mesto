export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open () {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose (evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
    this._popup
      .querySelector('.popup__close-button')
      .addEventListener('mousedown', () => {
        this.close();
      });
    window.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    })
  }
}
