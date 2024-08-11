import { Box } from "@mui/material";
import AccountProfileComponent from "components/AccountComponents/AccountProfileComponent";
import { memo } from "react";
import styled from "styled-components";

function Profile() {
  return (
    <MainContainer>
      <AccountProfileComponent />
    </MainContainer>
  );
}

export default memo(Profile);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  padding: `${theme.paddingY} ${theme.paddingX}`,
  borderTop: `1px solid ${theme.palette.border.secondary}`,
  background: theme.palette.background.secondary,
}));
