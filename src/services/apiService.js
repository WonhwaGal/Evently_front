import apiClient from '@/services/apiClient';

export const postCategory = (categoryName) => {
  return apiClient.post('/categories/create', null, {
    params: { categoryName }
  });
}

export const getCategories = () => apiClient.get('/categories');


