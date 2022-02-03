const initialState = {
  isLoggedIn: false,
  user: undefined,
  services: [],
  userBookings: [],
  reports: {}
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
    case 'EDIT_USER':
      return {
        ...state,
        user: action.data
      }
    case 'GET_USER_BOOKINGS':
      return {
        ...state,
        userBookings: action.data
      }
    case 'GET_REPORTS':
      return {
        ...state,
        reports: action.data
      }
    default:
      return {
        ...state
      };
  }
};

export default reducer;