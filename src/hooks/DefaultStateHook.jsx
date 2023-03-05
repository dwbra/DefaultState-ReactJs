import React, { useState, useEffect, useReducer, useRef } from "react";
import defaultStateReducer from "../reducers/defaultStateReducer";
import { isDecodedJson, isJson } from "../helpers/helperFunctions";

const DefaultStateHook = (props) => {
  const params = new URLSearchParams(window.location.search);

  let urlParamsData = {};
  if (!!params.toString()) {
    for (let [key, value] of params.entries()) {
      let val;
      if (isDecodedJson(value)) {
        val = JSON.parse(decodeURIComponent(value));
        let newObj = { [key]: val };
        urlParamsData = { ...urlParamsData, ...newObj };
      } else {
        console.error("not valid JSON");
      }
    }
  }

  //   let testJBOD = {
  //     exampleLocal: ["key", "val"],
  //     defaultLocal: ["key2", "val2"],
  //   };
  //   console.log(JSON.stringify(testJBOD));

  let localStorageData = {};
  if (props.localStorageNames.length > 0) {
    props.localStorageNames.forEach((name) => {
      let l = localStorage.getItem(name);
      if (isJson(l)) {
        let f = JSON.parse(l);
        if (f !== null) {
          Object.assign(localStorageData, { [name]: f });
        } else {
          console.error("name does not exist in localStorage");
        }
      } else {
        console.error("not valid JSON");
      }
    });
  }

  const updateLocalStorage = (payload) =>
    dispatchDefaultState({ type: "updateLocalStorage", payload });

  const initialState = {
    status: props ? "loading" : "idle",
    error: null,
    urlParamsData: null,
    localStorageData: null,
    updateLocalStorage: updateLocalStorage,
  };

  // Setup our state and actions
  const [defaultState, dispatchDefaultState] = useReducer(
    defaultStateReducer,
    initialState
  );

  useEffect(() => {
    if (!props) {
      dispatchDefaultState({ type: "idle" });
      return;
    }

    if (props.urlParams) {
      dispatchDefaultState({ type: "setUrlParams", payload: urlParamsData });
    }

    if (props.localStorage) {
      dispatchDefaultState({
        type: "setLocalStorage",
        payload: localStorageData,
      });
    }
  }, []);

  return defaultState;
};

export default DefaultStateHook;
