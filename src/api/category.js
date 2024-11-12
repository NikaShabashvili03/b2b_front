import axios from '../utils/axios'

export const fetchCategory = async () => {
    const response = await axios.get(`/category`);
    return response.data;
};