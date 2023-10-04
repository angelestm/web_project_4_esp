import {popupWithImage} from "./PopupWithImage.js";
import likeButtonSrc from "../../images/LikeButton.png";
import deleteButtonSrc from "../../images/trash-can.png";
import likeBlackSrc from "../../images/likeButtonActive.jpg"

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
      // Condition para agregar el corazon
      const currentClassList = this._element.querySelector(".element__like-button").classList;
      if (currentClassList.contains("element__like-button_black")) {
        this._element.querySelector(".element__like-button").src = likeBlackSrc;
      } else {
        this._element.querySelector(".element__like-button").src = likeButtonSrc;
      }
    })
  }
  
  _deleteCard() {
    this._element.querySelector(".element__delete-button").addEventListener("click", () => {
      this._element.remove();
    })
  }
  
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
    this._element.querySelector("#likeButton").src = likeButtonSrc;
    this._element.querySelector("#deleteButton").src = deleteButtonSrc;
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