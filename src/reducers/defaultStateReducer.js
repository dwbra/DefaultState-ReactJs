const defaultStateReducer = (state, { type, payload }) => {
  const stateCopy = { ...state };
  switch (type) {
    case "idle":
      return state;
    case "setUrlParams":
      return { ...stateCopy, urlParamsData: payload };
    case "setLocalStorage":
      return { ...stateCopy, localStorageData: payload };
    case "updateLocalStorage":
      let { name, data } = payload;
      let currentLocalState = stateCopy.localStorageData;
      currentLocalState[name] = JSON.parse(data);
      return { ...stateCopy, localStorageData: currentLocalState };
    default:
      return state;
  }
};

export default defaultStateReducer;
