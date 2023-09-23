import {popupWithImage} from "./PopupWithImage.js";

class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector =  cardSelector;
  }
  
  _getTemplate() {
    return document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  }
  
  _handleLike() {
    this._element.querySelector(".element__like-button").addEventListener("click", () => {
      this._element.querySelector(".element__like-button").classList.toggle("element__like-button_black");
    })
  }
  
  _deleteCard() {
    this._element.querySelector(".element__delete-button").addEventListener("click", () => {
      this._element.remove();
    })
  }
  
  // _handleOpenPopup() {
  //   imagePopUpElement.src = this._link;
  //   imagePopUpTitleElement.textContent = this._name;
  //   popUpThreeElement.classList.add("popup_opened");
  // }
  //
  // _handleClosePopup() {
  //   imagePopUpElement.src = "";
  //   popUpThreeElement.classList.remove("popup_opened");
  // }
  
  _setEventListeners() {
    this._element.querySelector(".element__image").addEventListener("click", () => {
      popupWithImage.open(this._link, this._name);
    });
  }
  
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__description").textContent = this._name;
    this._element.querySelector(".element__image").alt = `imagen de ${this._name}`;
    this._handleLike();
    this._deleteCard();
    
    return this._element;
  }
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
}

class CreateCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._name = data[0];
    this._link = data[1];
    
  }
}

export {Card, DefaultCard, CreateCard};