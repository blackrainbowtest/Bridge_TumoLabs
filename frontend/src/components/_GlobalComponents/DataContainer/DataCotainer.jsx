import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function DataContainer({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default memo(DataContainer);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",

  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
  },
}));
