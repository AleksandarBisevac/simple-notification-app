import { useContext, useReducer, createContext } from 'react';

import { LOGIN, LOGIN_BEGIN, LOGIN_ERROR, LOGOUT } from './authActions';
import authReducer from './authReducer';

const initialState = {
  user: null,
  alertText: '',
  alertType: '',
  isLoading: false,
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loginUser = (user) => {
    dispatch({ type: LOGIN_BEGIN });
    try {
      dispatch({
        type: LOGIN,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return <AuthContext.Provider value={{ ...state, loginUser, logout }}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, initialState, useAuthContext };
