import {FormValidator} from "./FormValidator.js";
import {DefaultCard} from "./card.js";

export const editButtonElement = document.querySelector(".profile__edit-button");
export const popUpOneElement = document.querySelector("#pop-up1");
export const modalCloseButtonElement = document.querySelector("#close-button1");
export const modalFormElement = document.querySelector("#form1");
export const addButton = document.querySelector(".profile__add-button-container");
export const popUpTwo = document.querySelector("#pop-up2");
export const closeButton = document.querySelector("#close-button2");
export const formTwo = document.querySelector("#form2");
export const popUpThreeElement = document.querySelector("#pop-up3");
export const imagePopUpElement = document.querySelector("#image-popUp");
export const imagePopUpTitleElement = document.querySelector("#popUP-img-title");
export const closeImagePopUpElement = document.querySelector(".zoom-pop-up__close-button");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

initialCards.forEach((item) => {
  
  const card = new DefaultCard(item, ".card");
  const cardElement = card.generateCard();
  
  document.querySelector(".elements").append(cardElement);
});

// Instanciando las variables del formulario
const form1 = new FormValidator("form1");
const form2 = new FormValidator("form2");

// Ejecutando el metodo `enableValidation` en ambas clases
form1.enableValidation();
form2.enableValidation();