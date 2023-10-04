import "./index.css";
import logoSrc from "../images/logo.png";
import profilePhotoSrc from "../images/profile__photo.png";
import editButtonSrc from "../images/EditButton.png";
import addButtonSrc from "../images/Vector.png";
import closeButton1Src from "../images/CloseIcon.png";
import closeButton2Src from "../images/CloseIcon.png";
import closeButton3Src from "../images/CloseIcon.png";

import {DefaultCard} from "../js/components/card.js";
import {
  addButton,
  popUpOneElement,
  popUpTwo,
  initialCards,
  editButtonElement
} from "../js/components/constants.js";
import PopupWithForm from "../js/components/PopupWithForm.js";
import UserInfo from "../js/components/UserInfo.js";
import Section from "../js/components/section.js";

const logoImage = document.getElementById("logo");
logoImage.src = logoSrc;
const profileImage = document.getElementById("profilePhoto");
profileImage.src = profilePhotoSrc;
const editButtonImage = document.getElementById("editButton");
editButtonImage.src = editButtonSrc;
const addButtonImage = document.getElementById("addButton");
addButtonImage.src = addButtonSrc;
const closeButton1Image = document.getElementById("close-button1");
closeButton1Image.src = closeButton1Src;
const closeButton2Image = document.getElementById("close-button2");
closeButton2Image.src = closeButton2Src;
const closeButton3Image = document.getElementById("close-button3");
closeButton3Image.src = closeButton3Src;

const generateCards = (data) => {
  const card = new DefaultCard(data, ".card");
  const cardElement = card.generateCard();
  document.querySelector(".elements").append(cardElement);
}

const section = new Section({
  items: initialCards,
  renderer: generateCards
}, ".elements");
section.renderer();

// Crea una variable con la clase de UserInfo para actualizar la información
// del usuario
const userInfo = new UserInfo({
  nameSelector: ".profile__name", aboutSelector: ".profile__description"
});

// Crear una instancia para cada formulario, crear nueva tarjeta y editar perfil
const editProfileForm = new PopupWithForm((formData) => {
  userInfo.setUserInfo(formData.name, formData.about);
  editProfileForm.close();
}, popUpOneElement);

const newCardForm = new PopupWithForm((formData) => {
  const card = new DefaultCard(formData, ".card");
  const cardElement = card.generateCard();
  section.addItem(cardElement);
  newCardForm.close();
}, popUpTwo);

// Seteando los event listeners de c/una de las variables de los formularios
newCardForm.setEventListeners();
editProfileForm.setEventListeners();

// Agregando los eventListeners para el evento click de c/uno de los formularios
addButton.addEventListener('click', () => {
  newCardForm.open();
});

editButtonElement.addEventListener('click', () => {
  editProfileForm.open();
});