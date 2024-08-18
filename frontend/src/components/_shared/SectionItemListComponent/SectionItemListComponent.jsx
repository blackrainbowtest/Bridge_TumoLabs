import { Box } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SectionItemListComponent({ linkList, columns = 1 }) {
  return (
    <MainContainer columns={columns}>
      {linkList.map((link, index) => {
        return <Link key={index} to={link.to}>{link.label}</Link>;
      })}
    </MainContainer>
  );
}

export default memo(SectionItemListComponent);

const MainContainer = styled(Box)(({ theme, columns }) => ({
  maxWidth: "100%",
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
  "@media (min-width: 640px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
  },
  "@media (min-width: 768px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
  },
  "@media (min-width: 1300px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 2)}, 1fr)`,
  },
  '&& a': {
    fontFamily: theme.typography.fontFamilyNano,
    textDecorationLine: 'underline',
    color: `${theme.palette.text.secondary}!important`,
  },
}));
