//Validación de formularios
class FormValidator {
  constructor(id) {
    this.element = document.getElementById(id);
  }
  
  // Metodos privados
  _checkInputValidity(inputElement) {
    const errorElement = this.element.querySelector(`.${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      inputElement.classList.remove("form__input-error");
      errorElement.classList.remove("form__input-span-error_active");
      errorElement.textContent = "";
    } else {
      inputElement.classList.add("form__input-error");
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add("form__input-span-error_active");
    }
    
    // Validando todos los inputs
    const inputList = Array.from(this.element.querySelectorAll(".form__input"));
    let formIsValid = true;
    for (let i = 0; i < inputList.length; i++) {
      const input = inputList[i];
      if (!input.validity.valid) {
        formIsValid = false;
        break;
      }
    }
    const buttonForm = this.element.querySelector(".button");
    buttonForm.disabled = !formIsValid;
  }
  
  _setEventListeners() {
    const self = this;
    const inputList = Array.from(this.element.querySelectorAll(".form__input"));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        self._checkInputValidity(inputElement);
      });
    });
  };
  
  // Metodo publico
  enableValidation() {
    this.element.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
}

export {FormValidator};


