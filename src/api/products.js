import axios from '../utils/axios'

export const fetchProduct = async ({ categoryId, subcategoryId, page }) => {
    const response = await axios.get(`/product/category/?skip=${page}`, {
        params: { 
            categoryId: categoryId, 
            subcategoryId: subcategoryId 
        },
    });
    return response.data;
};