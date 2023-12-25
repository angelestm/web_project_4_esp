import "./index.css";
import logoSrc from "../images/logo.png";
import profilePhotoSrc from "../images/profile__photo.png";
import editButtonSrc from "../images/EditButton.png";
import addButtonSrc from "../images/Vector.png";
import closeButtonProfileSrc from "../images/CloseIcon.png";
import closeButtonPlaceSrc from "../images/CloseIcon.png";
import closeButtonImgPopUpSrc from "../images/CloseIcon.png";
import closeButtonDeleteSrc from "../images/CloseIcon.png";
import closeButtonAvatarSrc from "../images/CloseIcon.png";

import {DefaultCard} from "../script/components/Card.js";
import {
  api,
  addButton,
  popUpOneElement,
  popUpTwo,
  initialCards,
  editButtonElement,
  popUpEditProfilePhoto,
  editProfilePhotoButton,
  userName,
  userAbout,
  profileAvatar,
  userId
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
const closeButtonProfileImage = document.getElementById("close-button1");
closeButtonProfileImage.src = closeButtonProfileSrc;
const closeButtonPlaceImage = document.getElementById("close-button2");
closeButtonPlaceImage.src = closeButtonPlaceSrc;
const closeButtonImgPopUpImage = document.getElementById("close-button3");
closeButtonImgPopUpImage.src = closeButtonImgPopUpSrc;
const closeButtonDeleteImage = document.getElementById("close-button4");
closeButtonDeleteImage.src = closeButtonDeleteSrc;
const closeButtonAvatarImage = document.getElementById("close-button5");
closeButtonAvatarImage.src = closeButtonAvatarSrc;

const defaultProfile = await api.getURL('/users/me');
userName.innerHTML = defaultProfile.name;
userAbout.innerHTML = defaultProfile.about;
profileAvatar.src = defaultProfile.avatar;

const usersCardsData = await api.getURL('/cards');

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
  
  // Buscar el boton para actualizar su texto
  const formButton = editProfileForm._form.querySelector("button");
  formButton.innerText = "Guardando...";
  formButton.disabled = true;
  
  // LLamo a la API
  api.updateURL("PATCH",
      "/users/me",
      {name: formData.name, about: formData.about}
  )
      .finally(() => {
        formButton.innerText = "Guardar";
        formButton.disabled = false;
        editProfileForm.close();
      });
  
}, popUpOneElement);

const newCardForm = new PopupWithForm((formData) => {
  api
      .updateURL("POST", "/cards", formData)
      .then((result) => {
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
  api.updateURL("PATCH", "/users/me/avatar", {
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
  const userName = editProfileForm._form.querySelector("#user-name");
  const userAbout = editProfileForm._form.querySelector("#user-about");
  
  userName.value = userInfo.getUserInfo().name;
  userAbout.value = userInfo.getUserInfo().about;
  editProfileForm.open();
});

editProfilePhotoButton.addEventListener('click', () => {
  editProfilePhoto.open();
});