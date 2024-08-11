import { memo } from "react";
import ProfileDataComponent from "./ProfileDataComponent";
import ProfileMenuComponent from "./ProfileMenuComponent";
import styled from "styled-components";
import { Box } from "@mui/material";

function AccountProfileComponent() {
  return (
    <MainContainer>
      <ProfileMenuComponent />
      <ProfileDataComponent />
    </MainContainer>
  );
}

export default memo(AccountProfileComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
}));
