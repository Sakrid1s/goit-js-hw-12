import { refs } from './js/refs';
import { onFormSubmit } from './js/form-submit';
import { onShowMoreBtnClick } from './js/show-more-btn';

refs.form.addEventListener('submit', onFormSubmit);
refs.showMoreBtn.addEventListener('click', onShowMoreBtnClick);
