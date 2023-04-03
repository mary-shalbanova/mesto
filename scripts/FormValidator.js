export default class FormValidator {
  constructor(form, validationConfig) {
    this.config = validationConfig;
    this._form = form;
  }

  _hideInputError(input) {
    this._errorTextElement.classList.remove(this.config.errorClassVisible);
    this._errorTextElement.textContent = '';
    input.classList.remove(this.config.inputErrorClass);
  }

  _showInputError(input) {
    this._errorTextElement.classList.add(this.config.errorClassVisible);
    this._errorTextElement.textContent = input.validationMessage;
    input.classList.add(this.config.inputErrorClass);
  }

  _checkInputValidity(input) {
    this._errorTextElement = this._form.querySelector(
      `${this.config.errorSelectorTemplate}${input.name}`
    );
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _enableSubmitButton() {
    this._submitButton.classList.remove(this.config.inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _disableSubmitButton() {
    this._submitButton.classList.add(this.config.inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._form.querySelectorAll(this.config.inputSelector)
    );
    this._submitButton = this._form.querySelector(
      this.config.submitButtonSelector
    );
    this._form.addEventListener('reset', () => {
      this._disableSubmitButton();
    });

    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
