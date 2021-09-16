import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';

export const searchForQuery = async queryparams => {
  const response = await axios.get(`${BASE_URL}/${queryparams}`);
  return response;
};
