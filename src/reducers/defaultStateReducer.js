const defaultStateReducer = (state, { type, payload }) => {
  const stateCopy = { ...state };
  switch (type) {
    case "setUrlParams":
      return { ...stateCopy, data: "cock" };
    //   return (state = params.get("query")
    //     ? decodeURIComponent(params.get("query")) //here we simply decode the URI string by passing the value from params.
    //     : "");
    // case "dataArray":
    //   try {
    //     return (state = params.get("data")
    //       ? JSON.parse(decodeURIComponent(params.get("data"))) //turn the JSON string into valid js, then decode
    //       : []);
    //   } catch (error) {
    //     //if a user tries to enter an invalid URI string, catch the error and store in state
    //     return (state = error);
    //   }
    // case "setLocalStorage":
    //   return (state =
    //     JSON.parse(localStorage.getItem("exampleLocal")) !== null //turn into valid js and then check if localstorage exists
    //       ? JSON.parse(localStorage.getItem("exampleLocal"))
    //       : []);
    default:
      return state;
  }
};

export default defaultStateReducer;
