import axios from 'axios';
import { useMainStore } from "@/services/mainStore.js";

const mainStore = useMainStore();
const apiClient = axios.create({
  baseURL: mainStore.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API call failed:', error);
    if(error.status.code === 401){
      //authorization popup
    }
    else if(error.status.code === 404){
      //not found
    }
    return Promise.reject(error);
  }
);

//TODO understand
apiClient.interceptors.request.use(
  config => {
    // Add authorization token to every request
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
export default apiClient;
