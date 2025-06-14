import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3100',
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
