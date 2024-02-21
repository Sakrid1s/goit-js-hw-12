import { refs } from './js/refs';
import { onFormSubmit, onLoadMoreBtnClick } from './js/form-submit';

refs.form.addEventListener('submit', onFormSubmit);
refs.showMoreBtn.addEventListener('click', onLoadMoreBtnClick);
