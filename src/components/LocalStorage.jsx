import React, { useState } from "react";
import { Typography, Button, TextareaAutosize, TextField } from "@mui/material";

const LocalStorage = ({ localStorageData, updateLocalStorage }) => {
  const [localState, setLocalState] = useState({
    name: "",
    data: "",
  });

  const handleLocalStorageClick = () => {
    const payload = {
      name: localState.name,
      data: localState.data,
    };
    updateLocalStorage(payload);
    localStorage.setItem(`${payload.name}`, payload.data);
  };

  console.log(localStorageData);

  return (
    <>
      <Typography variant="h5" mb="10px">
        <strong>Testing LocalStorage:</strong>
      </Typography>
      <Typography mb="10px">
        <strong>Testing localStorage:</strong> To test localStorage, once the
        application is running, click on the button "create localStorage data".
        This should add some test data into your localStorage. Once that has
        been stored, you should now see the localStorage being displayed.
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter localStorage name you wish to update"
        variant="outlined"
        value={localState.name}
        style={{ width: "100%", marginBottom: "10px", marginTop: "10px" }}
        onChange={(event) => {
          setLocalState({ ...localState, name: event.target.value });
        }}
      />
      <TextareaAutosize
        id="dataArrayInputField"
        style={{ width: "100%", marginBottom: "10px", marginTop: "10px" }}
        minRows={5}
        placeholder="{}"
        value={localState.data}
        onChange={(event) => {
          setLocalState({ ...localState, data: event.target.value });
        }}
      />
      <Button variant="contained" onClick={handleLocalStorageClick}>
        Generate localStorage
      </Button>
      <p>Test localStorage output:</p>
      {localStorageData &&
        Object.values(localStorageData).map((item, index) => {
          return Object.values(item).map((d, i) => (
            <Typography key={i} pt="10px" pb="10px">
              <strong>{` ${i}: ${d}`}</strong>
              <br />
            </Typography>
          ));
        })}
    </>
  );
};

export default LocalStorage;
