import axios from 'axios';

export async function getPixabayImages(inputValue, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const PIXAPAY_KEY = '?key=42339224-5f1cb7b0c825234adabadbe9d';
  const url = `${BASE_URL}${PIXAPAY_KEY}`;
  const params = {
    q: `${inputValue}`,
    imageType: 'photo',
    orientation: 'horizontal',
    safeSearch: 'true',
    page,
    per_page: 15,
  };
  const res = await axios.get(url, { params });
  return res.data;
}
