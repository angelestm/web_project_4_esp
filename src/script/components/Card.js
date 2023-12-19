import {popupWithImage} from "./PopupWithImage.js";
import likeButtonSrc from "../../images/LikeButton.png";
import deleteButtonSrc from "../../images/trash-can.png";
import likeBlackSrc from "../../images/likeButtonActive.jpg"
import Popup from "./PopUp";
import {api, popUpDeleteCard, userId} from "../constants";

class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._id = data._id;
    this._likes = [];
    this._showDelete = true;
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
      // Condición para agregar el corazon
      const currentClassList = this._element.querySelector(".element__like-button").classList;
      if (currentClassList.contains("element__like-button_black")) {
        this._element.querySelector(".element__like-button").src = likeButtonSrc;
        api.deleteLike(this._element.id).then((res => {
          const likesInitArray = res.likes;
    
          this._element.querySelector(".element__like-count").textContent =
              likesInitArray.length;
        }))
      } else {
        this._element.querySelector(".element__like-button").src = likeBlackSrc;
        api.addLike(this._element.id).then((res => {
          const likesInitArray = res.likes;
    
          this._element.querySelector(".element__like-count").textContent =
              likesInitArray.length;
        }))
      }
  
      this._element.querySelector(".element__like-button").classList.toggle("element__like-button_black");
    })
  }
  
  _deleteCard() {
    this._element.querySelector(".element__delete-button").addEventListener("click", () => {
      const popupDeleteCard = new Popup(popUpDeleteCard);
      popupDeleteCard.setEventListeners();
      popupDeleteCard.open();
      popUpDeleteCard.querySelector(".button").addEventListener("click", () => {
        if(!!this._id){
          api.deleteCard(this._id).then(() => {
            this._element.remove();
            popupDeleteCard.close();
          })
        }else{
          this._element.remove();
          popupDeleteCard.close();
        }
      })
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
    
    // Reviso si mi "id" existe en la lista de likes
    let isLiked = false;
    this._likes.forEach((like) => {
      if (like._id === userId) {
        isLiked = true;
      }
    });
    
    // Si existe, inicio con el icono negro y agregando la clase
    if (isLiked) {
      this._element.querySelector("#likeButton").src = likeBlackSrc;
      this._element.querySelector("#likeButton").classList.add("element__like-button_black");
    } else {
      this._element.querySelector("#likeButton").src = likeButtonSrc;
      this._element.querySelector("#likeButton").classList.remove("element__like-button_black");
    }
    
    // Reviso la cantidad de likes
    this._element.querySelector(".element__like-count").textContent = this._likes.length>0 ? this._likes.length : "";
    
    // Reviso si mostrar o no el boton de eliminar
    if (this._showDelete) {
      this._element.querySelector("#deleteButton").src = deleteButtonSrc;
    } else {
      this._element.querySelector("#deleteButton").style.display = "none";
    }
    this._element.id = this._id;
    
    this._handleLike();
    this._deleteCard();
    
    return this._element;
  }
}

class DefaultCard extends Card {
  constructor(data, cardSelector, showDelete) {
    super(cardSelector);
    this._name = data.name;
    this._link = data.link;
    if (data.likes){
      this._likes = data.likes;
    }
    this._id = data._id;
    this._showDelete = showDelete;
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