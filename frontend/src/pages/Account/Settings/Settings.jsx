import { Box } from "@mui/material";
import AccountSettingsComponent from "components/AccountComponents/AccountSettingsComponent";
import { memo } from "react";
import styled from "styled-components";

function Settings() {
  return (
    <MainContainer>
      <AccountSettingsComponent />
    </MainContainer>
  );
}

export default memo(Settings);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  padding: `${theme.paddingY} ${theme.paddingX}`,
  background: theme.palette.background.primary,
}));
