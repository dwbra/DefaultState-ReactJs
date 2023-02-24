import React from "react";
import { Typography, Container, Box, Button } from "@mui/material";

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
          <Typography align="center" variant="p" display="block">
            Testing URL Params: To test url params state, once the application
            is running, enter a queryString such as ?query=test. This should
            then display your value.
          </Typography>
          <Typography align="center" variant="p" display="block">
            Testing localStorage: To test localStorage, once the application is
            running, click on the button "create localStorage data". This should
            add some test data into your localStorage. Once that has been
            stored, you should now see the localStorage being displayed.
          </Typography>
        </Box>
        <Box>
          <Button variant="contained">Generate localStorage</Button>
        </Box>
      </Container>
      <Container>
        <Box>{}</Box>
      </Container>
    </>
  );
};

export default Output;
