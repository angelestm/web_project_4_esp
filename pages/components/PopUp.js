export default class Popup {
  constructor(selector) {
    this._popupSelector = selector;
  }
  
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }
  
  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  
  }
  
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  
  setEventListeners() {
    const closeButton = this._popupSelector.querySelector('.popup__close');
    closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}