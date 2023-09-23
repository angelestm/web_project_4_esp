import {DefaultCard} from "./components/card.js";
import {
  addButton,
  popUpOneElement,
  popUpTwo,
  initialCards,
  editButtonElement
} from "./components/constants.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/section.js";

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