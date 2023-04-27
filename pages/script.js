const editButtonElement = document.querySelector(".profile__edit-button");
const popUpOneElement = document.querySelector("#pop-up1");
const modalCloseButtonElement = document.querySelector("#close-button1");
const modalFormElement = document.querySelector("#form1");

function handleDisplayModal() {
  popUpOneElement.classList.toggle("popup_opened");
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  
  const name = document.querySelector("#user-name").value;
  const about = document.querySelector("#user-about").value;
  
  const profileNameElement = document.querySelector(".profile__name");
  const profileDescriptionElement = document.querySelector(".profile__description");
  
  profileNameElement.innerHTML = name;
  profileDescriptionElement.innerHTML = about;
  
  handleDisplayModal();
}


editButtonElement.addEventListener('click', handleDisplayModal);
modalCloseButtonElement.addEventListener('click', handleDisplayModal);
modalFormElement.addEventListener('submit', handleProfileFormSubmit);


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



const addButton = document.querySelector(".profile__add-button-container");
const popUpTwo = document.querySelector("#pop-up2");
const closeButton = document.querySelector("#close-button2");
const FormTwo = document.querySelector("#form2");
const deleteButton = document.querySelector(".element__delete-button");

function handleDisplayModal2() {
  popUpTwo.classList.toggle("popup_opened");
}

addButton.addEventListener('click', handleDisplayModal2);
closeButton.addEventListener('click', handleDisplayModal2);