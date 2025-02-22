import axios from '../utils/axios'

export const fetchProductById = async ({ productId }) => {
    const response = await axios.get(`/product/one/${productId}`);
    
    return response.data;
};