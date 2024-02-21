import { refs } from './refs';

export function hideshowMoreBtn() {
  refs.showMoreBtn.classList.add('hidden');
}

export function showMoreBtn() {
  refs.showMoreBtn.classList.remove('hidden');
}

export function onShowMoreBtnClick() {}
