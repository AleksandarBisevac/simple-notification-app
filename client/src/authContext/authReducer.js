import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN, LOGOUT } from './authActions';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return { ...state, isLoading: true };
    case LOGIN:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        showAlert: true,
        alertType: 'success',
        alertText: 'Login Successful! Redirecting...',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload,
      };
    case LOGOUT:
      return { ...state, user: null };

    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default authReducer;
