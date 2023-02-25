import React from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

//destructure props object
const Output = ({ initialState }) => {
  //destructure state
  const { queryString, dataArray, localStorage } = initialState;

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

        <Box display="flex" gap="20px" mt="10px" mb="10px">
          <Box flex="1 0 50%" textAlign="left">
            <Typography>
              Testing URL Params: To test url params state, once the application
              is running, enter a queryString such as ?query=test. This should
              then display your value.
            </Typography>
          </Box>
          <Box flex="1 0 50%">
            <Typography pb="10px">{`Test query output: ${queryString}`}</Typography>
            <Typography pb="10px">{`Test dataArray output: ${dataArray}`}</Typography>
          </Box>
        </Box>

        <Box display="flex" gap="20px" mt="10px" mb="10px">
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
