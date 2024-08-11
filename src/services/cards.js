import instance from 'common/config/api';

const cardsService = {
  searchByUserId: async (userId) => {
    const response = await instance.get(`/cards?userId=${userId}`);
    return response.data;
  },
};

export default cardsService;
