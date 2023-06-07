const editButtonElement = document.querySelector(".profile__edit-button");
const popUpOneElement = document.querySelector("#pop-up1");
const modalCloseButtonElement = document.querySelector("#close-button1");
const modalFormElement = document.querySelector("#form1");
const addButton = document.querySelector(".profile__add-button-container");
const popUpTwo = document.querySelector("#pop-up2");
const closeButton = document.querySelector("#close-button2");
const formTwo = document.querySelector("#form2");
const popUpThreeElement = document.querySelector("#pop-up3");
const imagePopUpElement = document.querySelector("#image-popUp");
const imagePopUpTitleElement = document.querySelector("#popUP-img-title");

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

const cardContainer = document.querySelector(".elements");

/*función de eliminar tarjetas*/
function deleteCard (elementId) {
  document.getElementById(elementId).remove();
}

/*función de like*/
function handleLike (likeId) {
  document.getElementById(likeId).classList.toggle("element__like-button_black");
}

/*función de pop up de imagen de las tarjetas*/
function handleOnClickCardImage (imgSrc, title) {
  // debugging
  console.log(imgSrc, title);
  
  // Actualizando los valores del pop up, imagen y titulo
  imagePopUpElement.src = imgSrc;
  imagePopUpTitleElement.textContent = title;
  
  // Displaying modal
  handleDisplayModalImage();
}

function createCardElement (cardId, cardName, cardLink, likeId) {
  const divElement = document.createElement("div");
  divElement.classList.add("element");
  divElement.id = cardId;
  
  const deleteElement = document.createElement("img");
  deleteElement.src = "images/trash-can.png";
  deleteElement.alt = "Delete-Button";
  deleteElement.classList.add("element__delete-button");
  deleteElement.addEventListener("click", () => deleteCard(cardId));
  divElement.appendChild(deleteElement);
  
  const cardImgElement = document.createElement("img");
  cardImgElement.src = cardLink;
  cardImgElement.alt = `Foto del ${cardName}`;
  cardImgElement.classList.add("element__image");
  cardImgElement.addEventListener("click", () => handleOnClickCardImage(cardLink, cardName));
  divElement.appendChild(cardImgElement);
  
  const divContentElement = document.createElement("div");
  divContentElement.classList.add("element__content");
  
  const paragraphElement = document.createElement("p");
  paragraphElement.classList.add("element__description");
  paragraphElement.textContent = cardName;
  
  const LikeElement = document.createElement("img");
  LikeElement.id = likeId;
  LikeElement.src = "images/LikeButton.png";
  LikeElement.alt = "Like-Button";
  LikeElement.classList.add("element__like-button");
  LikeElement.addEventListener("click", () => handleLike(likeId));
  
  divContentElement.appendChild(paragraphElement);
  divContentElement.appendChild(LikeElement);
  
  divElement.appendChild(divContentElement);
  return divElement;
}

initialCards.forEach((card, index) => {
  const cardName = card.name;
  const cardLink = card.link;
  const cardId = "card-" + index.toString();
  const likeId = "like-" + index.toString();
  
  const divElement = createCardElement(cardId, cardName, cardLink, likeId);
  cardContainer.appendChild(divElement);
});

function handleDisplayModal2() {
  popUpTwo.classList.toggle("popup_opened");
}

function handleDisplayModalImage() {
  popUpThreeElement.classList.toggle("popup_opened");
}

function handleCreateCardFormSubmit (event) {
  event.preventDefault();
  
  const titleValue = document.querySelector("#title").value;
  const linkValue = document.querySelector("#image-link").value;
  
  if (!!titleValue && !!linkValue) {
    const cardId = "card-" + cardContainer.children.length.toString();
    const likeId = "like-card-" + cardContainer.children.length.toString();
    
    const divElement = createCardElement(cardId, titleValue, linkValue, likeId);
    cardContainer.appendChild(divElement);
  
    // Limpiando el formulario
    document.querySelector("#title").value = "";
    document.querySelector("#image-link").value = "";
  
    handleDisplayModal2();
  }
}

addButton.addEventListener('click', handleDisplayModal2);
closeButton.addEventListener('click', handleDisplayModal2);
formTwo.addEventListener('submit', handleCreateCardFormSubmit);

//Cerrar Modal con evento del teclado

document.onkeydown = function (evt){
  if (evt.key === "Escape") {
    popUpOneElement.classList.remove("popup_opened");
    popUpTwo.classList.remove("popup_opened");
  }
};

//Cerrar Modal On click

popUpOneElement.addEventListener('click', handleDisplayModal);
popUpTwo.addEventListener('click', handleDisplayModal2);