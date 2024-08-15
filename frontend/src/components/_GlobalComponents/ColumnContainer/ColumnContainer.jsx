import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function ColumnContainer({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default memo(ColumnContainer);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));
