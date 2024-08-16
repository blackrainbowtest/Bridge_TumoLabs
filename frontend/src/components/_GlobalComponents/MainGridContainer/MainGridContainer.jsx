import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function MainGridContainer({ children, columns = 4 }) {
  return <MainContainer columns={columns}>{children}</MainContainer>;
}

export default memo(MainGridContainer);

const MainContainer = styled(Box)(({ _, columns }) => ({
  maxWidth: "100%",
  display: "grid",
  gap: "2rem",
  flexGrow: 1,
  gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
  "@media (min-width: 640px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
  },
  "@media (min-width: 768px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 2)}, 1fr)`,
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 3)}, 1fr)`,
  },
  "@media (min-width: 1200px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 4)}, 1fr)`,
  },
}));
