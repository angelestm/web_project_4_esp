import {
  addButton, closeButton,
  editButtonElement, formTwo,
  modalCloseButtonElement,
  modalFormElement,
  popUpOneElement, popUpThreeElement,
  popUpTwo
} from "./index.js";
import {CreateCard} from "./card.js";

function handleDisplayModal() {
  const currentProfileName = document.querySelector(".profile__name").textContent
  const inputProfileName = document.getElementById("user-name");
  inputProfileName.placeholder = currentProfileName;
  const currentProfileAbout = document.querySelector(".profile__description").textContent
  const inputProfileAbout = document.getElementById("user-about");
  inputProfileAbout.placeholder = currentProfileAbout;
  popUpOneElement.classList.toggle("popup_opened");
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  
  const name = document.querySelector("#user-name").value;
  const about = document.querySelector("#user-about").value;
  
  const profileNameElement = document.querySelector(".profile__name");
  const profileDescriptionElement = document.querySelector(".profile__description");
  
  profileNameElement.textContent = name;
  profileDescriptionElement.textContent = about;
  
  handleDisplayModal();
}


editButtonElement.addEventListener('click', handleDisplayModal);
modalCloseButtonElement.addEventListener('click', handleDisplayModal);
modalFormElement.addEventListener('submit', handleProfileFormSubmit);

function handleDisplayModal2() {
  popUpTwo.classList.toggle("popup_opened");
}

function handleCreateCardFormSubmit (event) {
  event.preventDefault();
  
  const name = document.querySelector("#title").value;
  const link = document.querySelector("#image-link").value;
  
  const card = new CreateCard([name, link], ".card");
  const divElement = card.generateCard();
  document.querySelector(".elements").append(divElement);
  
  // Limpiando el formulario
  document.querySelector("#title").value = "";
  document.querySelector("#image-link").value = "";
  
  handleDisplayModal2();
}


addButton.addEventListener('click', handleDisplayModal2);
closeButton.addEventListener('click', handleDisplayModal2);
formTwo.addEventListener('submit', handleCreateCardFormSubmit);

//Cerrar Modal con evento del teclado

document.onkeydown = function (evt){
  if (evt.key === "Escape") {
    popUpOneElement.classList.remove("popup_opened");
    popUpTwo.classList.remove("popup_opened");
    popUpThreeElement.classList.remove("popup_opened");
  }
};

// //Cerrar Modal On click
// popUpOneElement.addEventListener('click', handleDisplayModal);
// popUpTwo.addEventListener('click', handleDisplayModal2);

