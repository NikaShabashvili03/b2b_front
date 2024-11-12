// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, fetchUserRegister, loginUser, logoutUser } from '../redux/slices/authSlice';


const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);
  const isAuthenticated = !!user;

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, user]);
  
  const register = async ({
    company,
    position, 
    identify, 
    name,
    lastname,
    phone, 
    email, 
    password,
  }) => {
    await dispatch(fetchUserRegister({ 
      company,
      position, 
      identify, 
      name,
      lastname,
      phone, 
      email, 
      password,
    }))
  }

  const login = async ({ email, password }) => {
    await dispatch(loginUser({ email, password }));
  };

  const logout = async () => {
    await dispatch(logoutUser());
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated, status }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
