import {Api} from "./components/API";

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_07",
  headers: {
    authorization: "ab189ab2-a9a1-466c-bc79-ca9e08e3ee05",
    "Content-Type": "application/json"
  }
});
export const editButtonElement = document.querySelector(".profile__edit-button");
export const popUpOneElement = document.querySelector("#pop-up1");
export const userName = document.querySelector(".profile__name");
export const userAbout = document.querySelector(".profile__description");
export const popUpThreeElement = document.querySelector("#pop-up3");
export const popUpTwo = document.querySelector("#pop-up2");
export const popUpDeleteCard = document.querySelector("#pop-up4");
export const popUpEditProfilePhoto = document.querySelector("#pop-up5");
export const addButton = document.querySelector(".profile__add-button-container");
export const editProfilePhotoButton = document.querySelector(".profile__photo-overlay");
export const profileAvatar = document.querySelector(".profile__photo");
export const userId = "9e725998f0767217c8a1ace9";
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    likes: []
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    likes: []
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    likes: []
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    likes: []
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    likes: []
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    likes: []
  }
];
