import React, { useState, useEffect } from "react";
import Output from "./components/Output";
import DefaultStateHook from "./hooks/DefaultStateHook";

function App() {
  const { data, status, error, setDefaultStateHook } = DefaultStateHook({
    urlParams: true,
    localStorage: true,
  });

  // check query string expected default values
  const params = new URLSearchParams(window.location.search);
  const getDefaultState = (key) => {
    let state;
    switch (key) {
      case "queryString":
        return (state = params.get("query")
          ? decodeURIComponent(params.get("query")) //here we simply decode the URI string by passing the value from params.
          : "");
      case "dataArray":
        try {
          return (state = params.get("data")
            ? JSON.parse(decodeURIComponent(params.get("data"))) //turn the JSON string into valid js, then decode
            : []);
        } catch (error) {
          //if a user tries to enter an invalid URI string, catch the error and store in state
          return (state = error);
        }
      case "localStorage":
        return (state =
          JSON.parse(localStorage.getItem("exampleLocal")) !== null //turn into valid js and then check if localstorage exists
            ? JSON.parse(localStorage.getItem("exampleLocal"))
            : []);
      default:
        return state;
    }
  };

  //construct your state using callback
  const [initialState, setInitialState] = useState({
    queryString: getDefaultState("queryString"),
    dataArray: getDefaultState("dataArray"),
    testLocalStorage: getDefaultState("localStorage"),
  });

  //keep state and localStorage in sync
  useEffect(() => {
    localStorage.setItem(
      "exampleLocal",
      JSON.stringify(initialState.testLocalStorage)
    );
  }, [initialState.testLocalStorage]);

  return (
    <div className="App">
      <Output initialState={initialState} setInitialState={setInitialState} />
    </div>
  );
}

export default App;
