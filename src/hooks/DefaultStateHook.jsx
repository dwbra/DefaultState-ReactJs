import React, { useState, useEffect, useReducer } from "react";
import defaultStateReducer from "../reducers/defaultStateReducer";

const DefaultStateHook = (obj) => {
  const params = new URLSearchParams(window.location.search);
  console.log(params.toString());

  let urlParamsData = [];
  for (const [key, value] of params.entries()) {
    let val = JSON.parse(decodeURIComponent(value));
    let newObj = { [key]: val };
    console.log(`${key}, ${value}`);
    console.log(newObj);
  }

  const initialState = {
    status: obj ? "loading" : "idle",
    data: undefined,
    error: undefined,
    setDefaultStateHook: undefined,
  };

  // Setup our state and actions
  const [defaultState, dispatchDefaultState] = useReducer(
    defaultStateReducer,
    initialState
  );

  useEffect(() => {
    // if (!obj) {
    //   dispatchDefaultState({ type: "idle" });
    //   return;
    // }

    if (obj.urlParams) {
      dispatchDefaultState({ type: "setUrlParams" });
    }

    if (obj.localStorage) {
      dispatchDefaultState({ type: "setLocalStorage" });
    }
  }, []);

  return defaultState;
};

export default DefaultStateHook;
