import axios from '../utils/axios'

export const addCart = async ({ productId, quantity }) => {
  const response = await axios.post(`/cart/add`, { productId, quantity });
  return response.data;
};

export const removeCart = async ({ id }) => {
  const response = await axios.delete(`/cart/remove/${id}`);
  return response.data;
};

export const fetchCart = async () => {
  const response = await axios.get(`/cart`);
  return response.data;
};