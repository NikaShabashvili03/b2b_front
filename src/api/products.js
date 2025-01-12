import axios from '../utils/axios'

export const fetchProduct = async ({ categoryId, subcategoryId, page }) => {
    const response = await axios.get(`/product/category`, {
        params: { 
            categoryId: categoryId, 
            subcategoryId: subcategoryId,
            skip: page
        },
    });

    return response.data;
};