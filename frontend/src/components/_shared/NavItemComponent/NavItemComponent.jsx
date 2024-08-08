import { Box, Button } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function NavItemComponent({ navItems, scrolling, changePage }) {
  return (
    <BoxContainer sx={{ display: { xs: "none", sm: "flex" } }}>
      {navItems.map((item) => (
        <ButtonContainer
          scrolling={scrolling.toString()}
          content={item.label}
          key={item.label}
          onClick={(e) => changePage(e, item)}
        >
          {item.label}
        </ButtonContainer>
      ))}
    </BoxContainer>
  );
}

export default memo(NavItemComponent);

const BoxContainer = styled(Box)(() => ({
  gap: "10px",
}));

const ButtonContainer = styled(Button)(({ theme, scrolling, content }) => ({
  backgroundColor: 
  content === "LLL"
  ? `${theme.palette.background.Crimson}!important` :
  content === "LBD"
  ? `${theme.palette.background.OrangeRed}!important` :
  content === "LBT"
  ? `${theme.palette.background.RoyalBlue}!important` :
  content === "PPL"
  ? `${theme.palette.background.SandyBrown}!important` : null,
  color:
    scrolling === "true"
      ? `${theme.palette.text.primary}!important`
      : `${theme.palette.primary.contrastText}!important`,
}));
