import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './refs';
import { removeLoader } from './css-loader';

function photoTemplate(data) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = data;
  return `
  <li class="gallery-item">
    <a href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}">
    </a>
    <div class="text">
      <p><b>Likes: </b>${likes}</p>
      <p><b>Views: </b>${views}</p>
      <p><b>Comments: </b>${comments}</p>
      <p><b>Downloads: </b>${downloads}</p>
    </div>
  </li>`;
}

function photosTemplates(data) {
  return data.map(photoTemplate).join('');
}

export function renderMarkup(hits) {
  const markup = photosTemplates(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  const gallery = new SimpleLightbox('.gallery a', modalOptions);
  const modalOptions = {
    captionsData: 'alt',
    captionDelay: 250,
  };
  gallery.refresh();
}
