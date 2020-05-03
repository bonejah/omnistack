import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-backendbpcl.herokuapp.com'
});

export default api;
