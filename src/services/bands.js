import instance from 'common/config/api';

const bandsService = {
  searchById: async (bandIds) => {
    const query = new URLSearchParams();
    bandIds.forEach((id) => query.append('id', id));
    const response = await instance.get(`/bands?${query.toString()}`);

    return response.data;
  },
};

export default bandsService;
