import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function MainContainerRow({ children, ...props }) {
  return <MainContainer {...props}>{children}</MainContainer>;
}

export default memo(MainContainerRow);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  flexGrow: 1,
  flexDirection: "row",
  position: "relative",
  gap: theme.spacing(1),
}));
