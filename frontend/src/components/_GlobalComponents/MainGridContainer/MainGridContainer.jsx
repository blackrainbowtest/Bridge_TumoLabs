import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function MainGridContainer({ children, columns = 4, ...props }) {
  return (
    <MainContainer columns={columns} {...props}>
      {children}
    </MainContainer>
  );
}

export default memo(MainGridContainer);

const MainContainer = styled(Box)(({ theme, columns }) => ({
  maxWidth: "100%",
  display: "grid",
  flexGrow: 1,
  "@media (min-width: 360px)": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  "@media (min-width: 415px)": {
    display: "grid",
    gap: theme.spacing(1),
  },
  gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
  gap: theme.spacing(3),
  "@media (min-width: 640px)": {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
    gap: theme.spacing(1.5),
  },
  "@media (min-width: 768px)": {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.min(columns, 2)}, 1fr)`,
    gap: theme.spacing(2),
  },
  "@media (min-width: 1024px)": {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.min(columns, 3)}, 1fr)`,
    gap: theme.spacing(2.5),
  },
  "@media (min-width: 1200px)": {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.min(columns, 4)}, 1fr)`,
    gap: theme.spacing(3),
  },
}));
