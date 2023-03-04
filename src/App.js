import React, { useState, useEffect } from "react";
import Output from "./components/Output";
import DefaultStateHook from "./hooks/DefaultStateHook";

function App() {
  const {
    status,
    error,
    urlParamsData,
    localStorageData,
    setUrlParams,
    setLocalStorage,
  } = DefaultStateHook({
    urlParams: true,
    localStorage: true,
    localStorageNames: ["exampleLocal", "defaultLocal"],
  });

  return (
    <div className="App">
      <Output
        urlParamsData={urlParamsData}
        localStorageData={localStorageData}
        setUrlParams={setUrlParams}
        setLocalStorage={setLocalStorage}
      />
    </div>
  );
}

export default App;
