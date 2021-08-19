export default (pins = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return pins;
    case 'CREATE':
      return pins;
    default:
      return pins;
  }
};
