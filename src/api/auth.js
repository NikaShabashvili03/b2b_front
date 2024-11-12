import axios from '../utils/axios'

export const login = async ({ email, password }) => {
  const response = await axios.post(`/user/login`, { email, password });
  return response.data;
};

export const fetchProfile = async () => {
  const response = await axios.get(`/user/profile`,);
  return response.data;
};

export const registerProfile = async ({
  company,
  position, 
  identify, 
  name,
  lastname,
  phone, 
  email, 
  password,
}) => {
    const response = await axios.post(`/user/register`, {
      company,
      position, 
      identify, 
      name,
      lastname,
      phone, 
      email, 
      password,
    });
    return response.data;
}

export const logout = async () => {
  await axios.post(`/user/logout`, {});
};
