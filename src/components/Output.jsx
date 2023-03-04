import React from "react";
import { Typography, Container, Box } from "@mui/material";
import URLParams from "./URLParams";
import LocalStorage from "./LocalStorage";

//destructure props object
//create children components so that each hold their own state
//this will ensure that any changes in state will only force a re-render on that component
const Output = ({ urlParamsData, localStorageData, updateLocalStorage }) => {
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
            <URLParams urlParamsData={urlParamsData} />
          </Box>
          <Box flex="1 0 50%" textAlign="left">
            <LocalStorage
              localStorageData={localStorageData}
              updateLocalStorage={updateLocalStorage}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Output;
