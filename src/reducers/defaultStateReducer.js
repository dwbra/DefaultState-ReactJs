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
      let { newState, localName } = payload;
      let currentLocalState = stateCopy.localStorageData;
      currentLocalState[[localName]] = newState;
      return { ...stateCopy, localStorageData: currentLocalState };
    default:
      return state;
  }
};

export default defaultStateReducer;
