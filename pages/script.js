const editButtonElement = document.querySelector(".profile__edit-button");
const modalElement = document.querySelector(".pop-up");
const modalCloseButtonElement = document.querySelector(".pop-up__close-button");
const modalFormElement = document.querySelector(".form");

function handleDisplayModal() {
  modalElement.classList.toggle("popup_opened");
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