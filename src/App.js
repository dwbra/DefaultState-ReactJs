import React, { useState } from "react";
import Output from "./components/Output";

function App() {
  // check query string expected default values
  const params = new URLSearchParams(window.location.search);

  //create a callback function to handle our different pieces of state
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

  const [initialState, setInitialState] = useState({
    queryString: getDefaultState("queryString"),
    dataArray: getDefaultState("dataArray"),
    localStorage: getDefaultState("localStorage"),
  });

  return (
    <div className="App">
      <Output initialState={initialState} />
    </div>
  );
}

export default App;
