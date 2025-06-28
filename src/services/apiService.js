import apiClient from '@/services/apiClient';

export const postCategory = (categoryName) => {
  console.log('Calling postCategory with:', categoryName);
  return apiClient.post('/categories/create', null, {
    params: { categoryName }
  });
}

export const getCategories = () => apiClient.get('/categories');

export const registerUser = (request) => {
  return apiClient.post('users/register', request);
}

export const loginUser = (request) => {
  return apiClient.post('users/login', request);
}

export const getUser = () => apiClient.get('users/getByIdentityId');
