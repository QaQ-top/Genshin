import Axios from 'axios';

const http = Axios.create({
  baseURL: 'http://localhost:1126',
  headers: {
    "Content-Type": "application/json"
  }
});


export default http;