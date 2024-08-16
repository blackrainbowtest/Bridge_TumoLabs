import { Box, Button, Typography } from "@mui/material";
import { memo } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function AboutAccountInfoComponent() {
  const navigate = useNavigate()
  const scrollToTarget = () => {
    navigate("sign-up")
  };

  return (
    <MainContainer>
      <Typography variant='h4' textAlign={"center"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
        laboriosam, debitis minus deleniti soluta vel voluptate inventore cum
        ipsa beatae, ex quasi saepe cumque repudiandae optio dicta mollitia sint
        sapiente?
      </Typography>
      <StyledButton onClick={scrollToTarget}>
        {`Registration types >>>`}
      </StyledButton>
    </MainContainer>
  );
}

export default memo(AboutAccountInfoComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  maxWidth: "100%",
  minHeight: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
}));

// FIXME: set colors by theme
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#9ACD32!important", // Yellow-green color
  color: "#FFFFFF!important", // White text
  textTransform: "none",
  fontSize: "16px",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "#8BB12D!important", // Slightly darker yellow-green color on hover
  },
  textDecoration: "none",
  cursor: "pointer",
  borderRadius: "4px",
  marginTop: "20px",
}));
