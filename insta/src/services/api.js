import axios from 'axios';
import { APP_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: APP_URL
  // baseURL: 'http://192.168.1.103:3333'
  // baseURL: 'http://10.0.3.2:3333',
});

export default api;
