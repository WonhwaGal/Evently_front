import axios from 'axios';
import { useMainStore } from "@/services/mainStore.js";
import { useAuthStore } from "@/services/authenticationStore.js";

const mainStore = useMainStore();
const authStore = useAuthStore();
const apiClient = axios.create({
  baseURL: mainStore.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('Evently API call failed:', error);
    if(error.response?.status === 401){
      //authorization popup
    }
    else if(error.response?.status === 404){
      //not found
    }
    return Promise.reject(error);
  }
);

apiClient.interceptors.request.use(
  config => {
    const token = authStore.authToken;
    console.log('Adding token:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
export default apiClient;
