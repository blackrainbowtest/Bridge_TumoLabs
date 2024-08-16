import { Box, Button, Typography } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function ContributeToProjectComponent() {
  return (
    <MainContainer>
      <Typography gutterBottom variant='h2' component='div'>
        Contribute us
      </Typography>
      <ButtonContainer
        variant='contained'
        size='small'
        onClick={(e) => {
          console.log("contribute");
        }}
      >
        Contrubute
      </ButtonContainer>
    </MainContainer>
  );
}

export default memo(ContributeToProjectComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const ButtonContainer = styled(Button)(({ _ }) => ({
    display: "flex",
    fontSize: "1.5rem!important"
  }));