import { refs } from './refs';

export function hidenloadMoreBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}

export function visibleLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}
