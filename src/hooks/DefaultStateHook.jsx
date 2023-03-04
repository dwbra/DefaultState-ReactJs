import React, { useState, useEffect, useReducer, useRef } from "react";
import defaultStateReducer from "../reducers/defaultStateReducer";
import { isDecodedJson } from "../helpers/helperFunctions";

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

  let localStorageData = [];
  if (props.localStorageNames.length > 0) {
    props.localStorageNames.forEach((name) => {
      let l = JSON.parse(localStorage.getItem(name));
      if (l !== null) {
        localStorageData.push({ [name]: JSON.parse(l) });
      } else {
        console.error("name does not exist in localStorage");
      }
    });
  }

  const setUrlParams = (payload) =>
    dispatchDefaultState({ type: "setUrlParams", payload });

  const setLocalStorage = (payload) =>
    dispatchDefaultState({ type: "setLocalStorage", payload });

  const initialState = {
    status: props ? "loading" : "idle",
    error: null,
    urlParamsData: null,
    localStorageData: null,
    setUrlParams: setUrlParams,
    setLocalStorage: setLocalStorage,
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

  //keep state and localStorage in sync
  //   const firstRender = useRef(true);
  //   useEffect(() => {
  //     if (firstRender.current) {
  //       firstRender.current = false;
  //       return;
  //     }
  //     localStorage.setItem(
  //       "exampleLocal",
  //       JSON.stringify(defaultState.localStorageData)
  //     );
  //   }, [defaultState.localStorageData]);

  return defaultState;
};

export default DefaultStateHook;
