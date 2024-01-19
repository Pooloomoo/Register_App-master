import axios from 'axios';

const REST_API_BASE_URL = 'https://localhost:8100/user/';

export const ListUser = () => axios.get(REST_API_BASE_URL);