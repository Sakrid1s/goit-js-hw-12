import { refs } from './refs';
import { getPixabayImages } from './pixabay-api';
import { renderMarkup } from './render-functions';
import { createLoader, removeLoader } from './css-loader';
import { visibleLoadMoreBtn, hidenloadMoreBtn } from './load-more-btn';
import { showError, showInfo } from './iziToast-messages';

let userInputValue;
let page;
let totalPhotos;
export async function onFormSubmit(event) {
  event.preventDefault();
  createLoader();
  refs.gallery.innerHTML = '';
  userInputValue = refs.formInput.value.trim();
  page = 1;
  if (!userInputValue) {
    removeLoader();
    hidenloadMoreBtn();
    return showError('Form field must be filled in.');
  }

  try {
    const data = await getPixabayImages(userInputValue, page);
    if (data.totalHits === 0) {
      removeLoader();
      hidenloadMoreBtn();
      return showInfo('Nothing found.');
    }
    totalPhotos = Math.ceil(data.totalHits / 15);
    renderMarkup(data.hits);
  } catch (error) {
    showError(error);
    totalPhotos = 0;
    refs.gallery.innerHTML = '';
  }

  removeLoader();
  checkLoadBtnVisibility();
  refs.form.reset();
}

export async function onLoadMoreBtnClick() {
  createLoader();
  page += 1;
  const data = await getPixabayImages(userInputValue, page);
  renderMarkup(data.hits);
  removeLoader();
  checkLoadBtnVisibility();
  const height = refs.gallery.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

function checkLoadBtnVisibility() {
  if (page >= totalPhotos) {
    hidenloadMoreBtn();
    showInfo('We are sorry, but you have reached the end of search results.');
  } else {
    visibleLoadMoreBtn();
  }
}
