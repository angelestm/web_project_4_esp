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
  imagePopUpTitleElement.innerHTML = title;
  
  // Displaying modal
  handleDisplayModalImage();
}

for (let i = 0; i < initialCards.length; i++) {
  const card = initialCards[i];
  const cardName = card.name;
  const cardLink = card.link;
  const cardId = "card-" + i.toString();
  const likeId = "like-" + i.toString();
  
  const cardHTML = `
    <div class="element" id="${cardId}">
      <img
        src="images/trash-can.png" alt="Delete-Button" class="element__delete-button"
        onclick="deleteCard('${cardId}')"
      >
      <img src="${cardLink}" alt="Foto del ${cardName}" class="element__image" onclick="handleOnClickCardImage('${cardLink}', '${cardName}')">
      <div class="element__content">
        <p class="element__description">${cardName}</p>
        <img id="${likeId}"
        src="images/LikeButton.png" alt="Like-Button" class="element__like-button"
        onclick="handleLike('${likeId}')">
      </div>
    </div>
  `;
  
  cardContainer.innerHTML += cardHTML;
}



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
  
    const cardHTML = `
    <div class="element" id="${cardId}">
      <img
        src="images/trash-can.png" alt="Delete-Button"
        class="element__delete-button"
        onclick="deleteCard('${cardId}')"
      >
      <img src="${linkValue}" alt="Foto del ${titleValue}" class="element__image" onclick="handleOnClickCardImage('${linkValue}', '${titleValue}')">
      <div class="element__content">
        <p class="element__description">${titleValue}</p>
        <img id="${likeId}" src="images/LikeButton.png" alt="Like-Button" class="element__like-button" onclick="handlelike('${likeId}')">
      </div>
    </div>
  `;
  
    cardContainer.innerHTML += cardHTML;
  
    // Limpiando el formulario
    document.querySelector("#title").value = "";
    document.querySelector("#image-link").value = "";
  
    handleDisplayModal2();
  }
}

addButton.addEventListener('click', handleDisplayModal2);
closeButton.addEventListener('click', handleDisplayModal2);
formTwo.addEventListener('submit', handleCreateCardFormSubmit);