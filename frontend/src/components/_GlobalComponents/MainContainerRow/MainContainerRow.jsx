import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function MainContainerRow({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default memo(MainContainerRow);

const MainContainer = styled(Box)(({ _ }) => ({
  maxWidth: "100%",
  display: "flex",
  flexGrow: 1,
  flexDirection: "row",
  gap: '10px',
}));
