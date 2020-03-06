import axios from 'axios';

import { ACCESS_KEY } from '../config/unsplash';

export async function getImages(page) {
  const res = await axios.get('https://api.unsplash.com/photos/', {
    params: {
      client_id: ACCESS_KEY,
      page,
      per_page: 16
    }
  });
  return res.data;
}
