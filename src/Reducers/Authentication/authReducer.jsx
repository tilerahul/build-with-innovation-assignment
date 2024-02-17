const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          userToken: action.payload.userToken,
          userData: action.payload.userData
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          userToken: null,
          userData: null
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  