const initialState = {
  services: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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