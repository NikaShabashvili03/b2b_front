import axios from '../utils/axios'

export const login = async ({ email, password }) => {
  const response = await axios.post(`/user/login`, { email: email, password: password });
  return response.data;
};

export const fetchProfile = async () => {
  const response = await axios.get(`/user/profile`,);
  return response.data;
};

export const registerProfile = async () => {
    const response = await axios.post(`/user/register`,);
    return response.data;
}

export const logout = async () => {
  await axios.post(`/user/logout`, {});
};
