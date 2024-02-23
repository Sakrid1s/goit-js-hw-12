import { refs } from './js/refs';
import { onFormSubmit, onLoadMoreBtnClick } from './js/form-submit';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
