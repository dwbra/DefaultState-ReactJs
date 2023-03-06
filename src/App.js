import React from "react";
import Output from "./components/Output";
import DefaultStateHook from "./hooks/DefaultStateHook";

function App() {
  const { status, error, urlParamsData, localStorageData, updateLocalStorage } =
    DefaultStateHook({
      urlParams: true,
      localStorage: true,
      localStorageNames: ["exampleLocal", "test"],
    });

  console.log({
    urlParamsData: urlParamsData,
    localStorageData: localStorageData,
    updateLocalStorage: updateLocalStorage,
  });

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
