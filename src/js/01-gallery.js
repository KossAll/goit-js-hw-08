// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageContainer = document.querySelector(`.gallery`);

const galleryMarkup = makegalleryItems(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function makegalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img loading="lazy" width="354" height="240" class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});

lightbox.on("shown.simplelightbox", function () {});
lightbox.on("closed.simplelightbox", function () {});
