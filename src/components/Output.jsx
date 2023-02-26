import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  ThemeProvider,
  createTheme,
  TextareaAutosize,
  InputUnstyled,
} from "@mui/material";

//destructure props object
const Output = ({ initialState }) => {
  //destructure state
  const { queryString, dataArray, localStorage } = initialState;

  const [fieldState, setFieldState] = useState([]);
  const handleArrayData = () => {
    const uriEncoded = encodeURIComponent(JSON.stringify(fieldState));
    const uriString = `?data=${uriEncoded}`;
    //https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
    navigator.clipboard
      .writeText(uriString)
      .then(() => {
        alert("Async: Copying to clipboard was successful!");
      })
      .catch((err) => {
        alert("Async: Could not copy text: ", err);
      });
  };

  console.log(fieldState);

  return (
    <>
      <Container>
        <Box>
          <Typography align="center" variant="h1">
            DefaultState App
          </Typography>
          <Typography align="center" variant="h3">
            Follow the steps below to test this applications code.
          </Typography>
        </Box>

        <Box display="flex" gap="20px" mt="30px" mb="10px">
          <Box flex="1 0 50%" textAlign="left">
            <Typography variant="h5">
              <strong>Testing URL Params:</strong>
            </Typography>
            <Typography>
              <strong>Query Testing</strong> - To test query url params state,
              once the application is running, enter a queryString such as
              ?query=test. This should then display your value.
            </Typography>
            <Typography>
              <strong>Array Testing</strong> - To test url params state with
              multiple values,
            </Typography>
            <TextareaAutosize
              id="dataArrayInputField"
              style={{ width: "100%" }}
              minRows={5}
              placeholder="[]"
              value={fieldState}
              onChange={(event) => {
                setFieldState(event.target.value);
              }}
            />
            <Button variant="contained" type="submit" onClick={handleArrayData}>
              Generate Array URI encoded JSON string
            </Button>
          </Box>
          <Box flex="1 0 50%">
            <Typography pb="10px">
              Test query output: <strong>{queryString}</strong>
            </Typography>
            <Typography pb="10px">
              Test dataArray output: <strong>{dataArray}</strong>
            </Typography>
          </Box>
        </Box>

        <Box display="flex" gap="20px" mt="100px" mb="10px">
          <Box flex="1 0 50%" textAlign="left">
            <Typography mb="10px">
              Testing localStorage: To test localStorage, once the application
              is running, click on the button "create localStorage data". This
              should add some test data into your localStorage. Once that has
              been stored, you should now see the localStorage being displayed.
            </Typography>
            <Button variant="contained">Generate localStorage</Button>
          </Box>
          <Box flex="1 0 50%">Test output:</Box>
        </Box>
      </Container>
      <Container>
        <Box>{}</Box>
      </Container>
    </>
  );
};

export default Output;
