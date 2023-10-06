import Popup from "./PopUp.js";
import {popUpThreeElement} from "../constants.js";

export class PopupWithImage extends Popup {
  constructor(popUpThreeElement) {
    super(popUpThreeElement);
  }
  
  open(link, title) {
    super.open();
    const imagePopUpElement = document.querySelector(".zoom-pop-up__image");
    const imagePopUpTitleElement = document.querySelector(".zoom-pop-up__title");
  
    imagePopUpElement.src = link;
    imagePopUpElement.alt = `Imagen de ${title}`;
    imagePopUpTitleElement.textContent = title;
  }
}

export const popupWithImage = new PopupWithImage(popUpThreeElement);
popupWithImage.setEventListeners();

// Cerrar cuando das click fuera del contenido del pop-up
popUpThreeElement.addEventListener("click", (event) => {
  if (event.target.id !== "image-popUp") {
    popupWithImage.close();
  }
});