import React, { useState, useEffect } from "react";
import Output from "./components/Output";
import DefaultStateHook from "./hooks/DefaultStateHook";

function App() {
  const { status, error, urlParamsData, localStorageData, updateLocalStorage } =
    DefaultStateHook({
      urlParams: true,
      localStorage: true,
      localStorageNames: ["exampleLocal"],
    });

  // console.log(localStorageData);

  return (
    <div className="App">
      <Output
        urlParamsData={urlParamsData}
        localStorageData={localStorageData}
        updateLocalStorage={updateLocalStorage}
      />
    </div>
  );
}

export default App;
