import axios from 'axios';

export default axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': 'ee1cbf26036e43a9a26051a2fccc4ce3',
  },
});
