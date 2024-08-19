import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function MainContainerColumn({ children, ...props }) {
  return <MainContainer {...props}>{children}</MainContainer>;
}

export default memo(MainContainerColumn);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  gap: "10px",
}));
