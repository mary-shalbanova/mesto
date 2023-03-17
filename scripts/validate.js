const showInputError = (
  input,
  errorTextElement,
  errorClassVisible,
  inputErrorClass
) => {
  errorTextElement.classList.add(errorClassVisible);
  errorTextElement.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
};

const hideInputError = (
  input,
  errorTextElement,
  errorClassVisible,
  inputErrorClass
) => {
  errorTextElement.classList.remove(errorClassVisible);
  errorTextElement.textContent = '';
  input.classList.remove(inputErrorClass);
};

const checkInputValidity = (
  input,
  errorSelectorTemplate,
  errorClassVisible,
  inputErrorClass
) => {
  const errorTextElement = document.querySelector(`${errorSelectorTemplate}${input.name}`);

  if (!input.validity.valid) {
    showInputError(input, errorTextElement, errorClassVisible, inputErrorClass);
  } else {
    hideInputError(input, errorTextElement, errorClassVisible, inputErrorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const enableSubmitButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
};

const disableSubmitButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
};

const toggleButtonState = (submitButton, inactiveButtonClass, inputList) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(submitButton, inactiveButtonClass);
  } else {
    enableSubmitButton(submitButton, inactiveButtonClass);
  }
};

const setEventListeners = (
  form,
  {
    inputSelector,
    submitButtonSelector,
    errorSelectorTemplate,
    errorClassVisible,
    inputErrorClass,
    inactiveButtonClass,
  }
) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const submitButton = form.querySelector(submitButtonSelector);

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  form.addEventListener('reset', function () {
    disableSubmitButton(submitButton, inactiveButtonClass);
  });

  toggleButtonState(submitButton, inactiveButtonClass, inputList);

  inputList.forEach((input) => {
    input.addEventListener('input', function (evt) {
      checkInputValidity(
        input,
        errorSelectorTemplate,
        errorClassVisible,
        inputErrorClass
      );
      toggleButtonState(submitButton, inactiveButtonClass, inputList);
    });
  });
};

const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((form) => {
    setEventListeners(form, rest);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClassVisible: 'form__error_visible',
  errorSelectorTemplate: '.form__error_type_',
});
