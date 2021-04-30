import axios from 'axios';

const apiKey = process.env.API_KEY;

const client = axios.create({
  baseURL: `https://outside-in-dev-api.herokuapp.com/${apiKey}`,
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(res => res.data);
  },
};

export default api;
