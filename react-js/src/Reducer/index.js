const initialState = {
  isLoggedIn: false,
  user: undefined,
  services: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.data,
        isLoggedIn: true
      }
    case 'LOGOUT':
      return {
        ...state,
        user: undefined,
        isLoggedIn: false
      }
    case 'GET_SERVICES':
      return {
        ...state,
        services: action.data
      }
    default:
      return {
        ...state
      };
  }
};

export default reducer;