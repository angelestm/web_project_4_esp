import {closeImagePopUpElement, imagePopUpElement, imagePopUpTitleElement, popUpThreeElement} from "./index.js";

class Card {
  constructor(cardSelector) {
    this._cardSelector =  cardSelector;
  }
  
  _getTemplate() {
    const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
    
    return cardElement;
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
  
  _handleOpenPopup() {
    imagePopUpElement.src = this._link;
    imagePopUpTitleElement.textContent = this._name;
    popUpThreeElement.classList.add("popup_opened");
  }
  
  _handleClosePopup() {
    imagePopUpElement.src = "";
    popUpThreeElement.classList.remove("popup_opened");
  }
  
  _setEventListeners() {
    this._element.querySelector(".element__image").addEventListener("click", () => {
      this._handleOpenPopup();
    });
    
    closeImagePopUpElement.addEventListener("click", () => {
      this._handleClosePopup();
    });
  }
  
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__description").textContent = this._name;
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