import axios from '../utils/axios'

export const fetchsubCategory = async ({ categoryId }) => {
    const response = await axios.get(`/subcategory/categorty/${categoryId}`);
    return response.data;
};