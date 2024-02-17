import React, { createContext, useReducer, useContext, useEffect } from 'react';
import authReducer from './authReducer';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(()=>{
    const userToken = localStorage.getItem('userToken');
    const userData = localStorage.getItem('userData');

    if(userToken && userData){
      dispatch({
        type : 'LOGIN',
        payload : {
          userToken,
          userData : JSON.parse(userData)
        }
      })
    }
  }, [])

  const login = (userToken, userData) => {
    localStorage.setItem('userToken', userToken);
    localStorage.setItem('userData', JSON.stringify(userData));
    dispatch({
      type: 'LOGIN',
      payload: { userToken, userData }
    });
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
