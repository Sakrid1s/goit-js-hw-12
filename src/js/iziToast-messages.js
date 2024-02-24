import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showError(message) {
  iziToast.error({
    position: 'topRight',
    message,
  });
}

export function showInfo(message) {
  iziToast.info({
    position: 'topRight',
    message,
  });
}
