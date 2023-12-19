import "./index.css";
import logoSrc from "../images/logo.png";
import profilePhotoSrc from "../images/profile__photo.png";
import editButtonSrc from "../images/EditButton.png";
import addButtonSrc from "../images/Vector.png";
import closeButton1Src from "../images/CloseIcon.png";
import closeButton2Src from "../images/CloseIcon.png";
import closeButton3Src from "../images/CloseIcon.png";
import closeButton4Src from "../images/CloseIcon.png";
import closeButton5Src from "../images/CloseIcon.png";

import {DefaultCard} from "../script/components/Card.js";
import {
  api,
  addButton,
  popUpOneElement,
  popUpTwo,
  initialCards,
  editButtonElement, popUpEditProfilePhoto, editProfilePhotoButton, userName, userAbout, profileAvatar, userId
} from "../script/constants.js";
import PopupWithForm from "../script/components/PopupWithForm.js";
import UserInfo from "../script/components/UserInfo.js";
import Section from "../script/components/Section.js";

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
const closeButton4Image = document.getElementById("close-button4");
closeButton4Image.src = closeButton4Src;
const closeButton5Image = document.getElementById("close-button5");
closeButton5Image.src = closeButton5Src;

const defaultProfile = await api.defaultProfile();
console.log("testing", defaultProfile);
userName.innerHTML = defaultProfile.name;
userAbout.innerHTML = defaultProfile.about;
profileAvatar.src = defaultProfile.avatar;

const usersCardsData = await api.getUsersCards();
console.log("testing", usersCardsData);

const generateCards = (data) => {
  const owner = data.owner;
  let showDelete = true;
  if (!!owner && owner._id !== userId) {
    showDelete = false;
  }
  
  const card = new DefaultCard({...data, likes: data.likes}, ".card", showDelete);
  const cardElement = card.generateCard();
  document.querySelector(".elements").append(cardElement);
}

const section = new Section({
  items: usersCardsData.concat(initialCards),
  renderer: generateCards
}, ".elements");
section.renderer();

// Crea una variable con la clase de UserInfo para actualizar la información
// del usuario
const userInfo = new UserInfo({
  nameSelector: ".profile__name", aboutSelector: ".profile__description"
});

// Crear una instancia para cada formulario, crear nueva tarjeta, editar perfil, editar imagen de perfil
const editProfileForm = new PopupWithForm((formData) => {
  userInfo.setUserInfo(formData.name, formData.about);
  api.updateProfile({name: formData.name, about: formData.about});
  editProfileForm.close();
}, popUpOneElement);

const newCardForm = new PopupWithForm((formData) => {
  api.addNewCard(formData).then((result) => {
    const card = new DefaultCard({
      ...formData,
      _id: result._id
    }, ".card", true);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
    newCardForm.close();
  });
}, popUpTwo);

const editProfilePhoto = new PopupWithForm((formData) => {
  api.editAvatar({
    avatar: formData.link
  }).then(r => {
    profileImage.src = formData.link;
    editProfilePhoto.close();
  } )
}, popUpEditProfilePhoto) ;

// Seteando los event listeners de c/una de las variables de los formularios
newCardForm.setEventListeners();
editProfileForm.setEventListeners();
editProfilePhoto.setEventListeners();

// Agregando los eventListeners para el evento click de c/uno de los formularios
addButton.addEventListener('click', () => {
  newCardForm.open();
});

editButtonElement.addEventListener('click', () => {
  editProfileForm.open();
});

editProfilePhotoButton.addEventListener('click', () => {
  editProfilePhoto.open();
});