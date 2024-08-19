import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function MainContentContainer({ children, ...props }) {
  return <MainContainer {...props}>{children}</MainContainer>;
}

export default memo(MainContentContainer);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  flexGrow: 1,
  padding: `${theme.paddingY} ${theme.paddingX}`,
  background: theme.palette.background.primary,
}));
