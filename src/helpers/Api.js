import axios from 'axios';

export default axios.create({
  baseURL: 'https://private-4639ce-ecommerce56.apiary-mock.com/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  responseType: 'json'
});