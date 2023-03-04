import React, { useState } from "react";
import { Typography, Button, TextareaAutosize, TextField } from "@mui/material";

const LocalStorage = ({ localStorageData, updateLocalStorage }) => {
  const [localState, setLocalState] = useState({
    name: "",
    data: {},
  });

  const handleLocalStorageClick = () => {
    // console.log(JSON.stringify(localState));

    const payload = {
      [localState.name]: localState.data,
    };
    updateLocalStorage(payload);
  };

  // console.log(localStorageData);

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
        placeholder="[]"
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
        Object.values(localStorageData).map((item, index) => (
          <Typography key={index} pt="10px" pb="10px">
            <strong>{` ${index}: ${item}`}</strong>
            <br />
          </Typography>
        ))}
    </>
  );
};

export default LocalStorage;
