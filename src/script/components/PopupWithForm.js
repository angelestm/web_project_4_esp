import Popup from "./PopUp.js";

export default class PopupWithForm extends Popup {
  constructor(callbackFormSubmit, popupSelector) {
    super(popupSelector);
    this._form = popupSelector.querySelector('.form');
    this._formSubmit = callbackFormSubmit;
    this._inputList = this._form.querySelectorAll(".form__input");
  }
  
  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }
  
  close() {
    super.close();
    
    // Limpiando c/uno de los inputs del formulario
    this._inputList.forEach((input) => {
      input.value = '';
    });
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());
    });
  }
}