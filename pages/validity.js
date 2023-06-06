//Validación de formularios

const checkInputValidity = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (!inputElement.validity.valid) {
    inputElement.classList.add("form__input-error");
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add("form__input-span-error_active");
  } else {
    inputElement.classList.remove("form__input-error");
    errorElement.classList.remove("form__input-span-error_active");
    errorElement.textContent = "";
  }
  
  // Validando todos los inputs
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  let formIsValid = true;
  for (let i = 0; i < inputList.length; i++) {
    const input = inputList[i];
    if (!input.validity.valid) {
      formIsValid = false;
      break;
    }
  }
  const buttonForm = formElement.querySelector(".button");
  buttonForm.disabled = !formIsValid;
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    
    setEventListeners(formElement);
  });
};

enableValidation();