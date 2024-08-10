import instance from 'common/config/api';

const categoriesService = {
  search: async () => {
    const response = await instance.get('/categories');
    return response.data;
  },
  get: async (categoryName) => {
    const response = await instance.get(`/categories/${categoryName}`);
    return response.data;
  },
};

export default categoriesService;
