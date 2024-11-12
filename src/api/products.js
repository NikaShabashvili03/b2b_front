import axios from '../utils/axios'

export const fetchProduct = async ({ categoryId }) => {
    const response = await axios.get(`/product/category/`, {
        params: { categoryId }
    });
    return response.data;
};