import { refs } from './refs';

export function showMoreBtn() {
  refs.showMoreBtn.classList.add('hidden');
}

export function hideShowMoreBtn() {
  refs.showMoreBtn.classList.remove('hidden');
}
