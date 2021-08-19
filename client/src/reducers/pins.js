const pinReducer = (pins = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...pins, action.payload];
    default:
      return pins;
  }
};

export default pinReducer;
