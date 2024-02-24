import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './refs';
import { getPixabayImages } from './pixabay-api';
import { renderMarkup } from './render-functions';
import { createLoader } from './css-loader';
import { removeLoader } from './css-loader';
import { visibleLoadMoreBtn } from './load-more-btn';
import { hidenloadMoreBtn } from './load-more-btn';

let userInputValue;
let page;
let totalPhotos;
export async function onFormSubmit(event) {
  event.preventDefault();
  createLoader();
  refs.gallery.innerHTML = '';
  userInputValue = refs.formInput.value.trim();
  if (!userInputValue) {
    removeLoader();
    return iziToast.error({
      message: 'Form field must be filled in',
      position: 'topRight',
    });
  }
  page = 1;
  const data = await getPixabayImages(userInputValue, page);
  if (data.totalHits === 0) {
    removeLoader();
    return iziToast.error({
      message: 'Nothing found',
      position: 'topRight',
    });
  }
  totalPhotos = Math.ceil(data.totalHits / 15);
  renderMarkup(data.hits);
  checkLoadBtnVisibility();
  refs.form.reset();
}

export async function onLoadMoreBtnClick() {
  createLoader();
  page += 1;
  const data = await getPixabayImages(userInputValue, page);
  renderMarkup(data.hits);
  checkLoadBtnVisibility();
}

function checkLoadBtnVisibility() {
  if (page === totalPhotos) {
    hidenloadMoreBtn();
    iziToast.error({
      position: 'topRight',
      message: 'We are sorry, but you have reached the end of search results.',
    });
  } else {
    visibleLoadMoreBtn();
  }
}
