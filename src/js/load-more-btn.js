import { refs } from './refs';

export function hideloadMoreBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}

export function loadMoreBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}
