import { Box } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SectionItemListComponent({ linkList }) {
  return (
    <MainContainer>
      {linkList.map((link, index) => {
        return <Link key={index} to={link.to}>{link.label}</Link>;
      })}
    </MainContainer>
  );
}

export default memo(SectionItemListComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  '&& a': {
    fontFamily: theme.typography.fontFamilyNano,
    textDecorationLine: 'none',
    color: `${theme.palette.text.secondary}!important`,
  }
}));
