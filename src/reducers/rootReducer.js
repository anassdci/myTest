const initState = {
  isOpen: true
};
const rootReducer = (state = initState, action) => {
  if (action.type === "CHANGE_LOG") {
    return {
      isOpen: !state.isOpen
    };
  }
  return state;
};
export default rootReducer;
