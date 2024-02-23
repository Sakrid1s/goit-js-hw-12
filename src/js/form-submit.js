import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './refs';
import { getPixabayImages } from './pixabay-api';
import { renderMarkup } from './render-functions';
import { createLoader } from './css-loader';
import { removeLoader } from './css-loader';
import { loadMoreBtn } from './load-more-btn';

let userInputValue;
let page;
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
  renderMarkup(data.hits);
  refs.form.reset();
}

export async function onLoadMoreBtnClick() {
  createLoader();
  page += 1;
  const data = await getPixabayImages(userInputValue, page);
  renderMarkup(data.hits);
}
