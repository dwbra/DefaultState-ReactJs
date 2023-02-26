import React, { useState } from "react";
import { Typography, Button, TextareaAutosize, TextField } from "@mui/material";

const URLParams = ({ initialState }) => {
  const { queryString, dataArray } = initialState;
  const [localComponentState, setLocalComponentState] = useState({
    q: "",
    arr: [],
  });

  const handleQueryString = () => {
    const uriEncoded = encodeURIComponent(
      JSON.stringify(localComponentState.q)
    );
    const uriString = `?query=${uriEncoded}`;
    //https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
    navigator.clipboard
      .writeText(uriString)
      .then(() => {
        alert("Copying to clipboard was successful!");
      })
      .catch((err) => {
        alert("Could not copy text: ", err);
      });
  };

  const handleArrayData = () => {
    const uriEncoded = encodeURIComponent(
      JSON.stringify(localComponentState.arr)
    );
    const uriString = `?data=${uriEncoded}`;
    navigator.clipboard
      .writeText(uriString)
      .then(() => {
        alert("Copying to clipboard was successful!");
      })
      .catch((err) => {
        alert("Could not copy text: ", err);
      });
  };

  return (
    <>
      <Typography variant="h5" mb="10px">
        <strong>Testing URL Params:</strong>
      </Typography>
      <Typography>
        <strong>Query Testing</strong> - To test query url params state, once
        the application is running, enter a queryString such as ?query=test.
        This should then display your value.
      </Typography>
      <TextField
        id="outlined-basic"
        label="Query"
        variant="outlined"
        value={localComponentState.q}
        style={{ width: "100%", marginBottom: "10px", marginTop: "10px" }}
        onChange={(event) => {
          setLocalComponentState({
            ...localComponentState,
            q: event.target.value,
          });
        }}
      />
      <Button variant="contained" type="submit" onClick={handleQueryString}>
        Generate Query URI encoded JSON string
      </Button>

      <Typography pt="10px" pb="10px">
        <p>Test query output:</p>
        {queryString.length > 0 && <strong>{queryString}</strong>}
      </Typography>

      <Typography>
        <strong>Array Testing</strong> - To test url params state with multiple
        values,
      </Typography>
      <TextareaAutosize
        id="dataArrayInputField"
        style={{ width: "100%", marginBottom: "10px", marginTop: "10px" }}
        minRows={5}
        placeholder="[]"
        value={localComponentState.arr}
        onChange={(event) => {
          setLocalComponentState({
            ...localComponentState,
            arr: event.target.value,
          });
        }}
      />
      <Button variant="contained" type="submit" onClick={handleArrayData}>
        Generate Array URI encoded JSON string
      </Button>
      <Typography pt="10px" pb="10px">
        <p>Test dataArray output:</p>
        {dataArray.length > 0 && <strong>{dataArray}</strong>}
      </Typography>
    </>
  );
};

export default URLParams;
