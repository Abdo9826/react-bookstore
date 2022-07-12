const CHECK_STATUS = 'CHECK_STATUS';
const initState = [];

export const CheckStatus = () => ({ type: CHECK_STATUS });

const categoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
