const defaultStateReducer = (state, { type, payload }) => {
  const stateCopy = { ...state };
  switch (type) {
    case "idle":
      return state;
    case "setUrlParams":
      return { ...stateCopy, urlParamsData: payload };
    case "setLocalStorage":
      return { ...stateCopy, localStorageData: payload };
    default:
      return state;
  }
};

export default defaultStateReducer;
