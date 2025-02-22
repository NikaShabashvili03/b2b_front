import axios from '../utils/axios'

export const fetchProduct = async ({ categoryId, subcategoryId, page }) => {
    const response = await axios.get(`/product/category/${categoryId}`, {
        params: {
            subcategoryId: subcategoryId,
            skip: page
        },
    });

    return response.data;
};