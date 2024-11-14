import axios from '../utils/axios'

export const addCart = async ({ productId, quantity }) => {
  const response = await axios.post(`/cart/add`, { productId, quantity });
  console.log(response)
  return response.data;
};

export const fetchCart = async () => {
  const response = await axios.get(`/cart`);
  return response.data;
};