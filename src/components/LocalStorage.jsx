import React, { useState } from "react";
import { Typography, Button, TextareaAutosize } from "@mui/material";

const LocalStorage = ({ localStorageData, setLocalStorage }) => {
  const [localState, setLocalState] = useState({});

  const handleLocalStorageClick = () => {
    setLocalStorage({
      ...localStorageData,
      exampleLocal: JSON.parse(localState),
    });
  };

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
      <TextareaAutosize
        id="dataArrayInputField"
        style={{ width: "100%", marginBottom: "10px", marginTop: "10px" }}
        minRows={5}
        placeholder="[]"
        value={localState}
        onChange={(event) => {
          setLocalState(event.target.value);
        }}
      />
      <Button variant="contained" onClick={handleLocalStorageClick}>
        Generate localStorage
      </Button>
      <Typography pt="10px" pb="10px">
        <p>Test localStorage output:</p>
        {localStorageData &&
          Object.values(localStorageData).map((item, index) => (
            <>
              <strong key={index}>{` ${index}: ${item}`}</strong>
              <br />
            </>
          ))}
      </Typography>
    </>
  );
};

export default LocalStorage;