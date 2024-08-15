import { memo } from "react";
import ProfileDataComponent from "./ProfileDataComponent";
import ProfileMenuComponent from "./ProfileMenuComponent";
import styled from "styled-components";
import { Box } from "@mui/material";
import BreadcrumbNavigationComponent from "components/_GlobalComponents/BreadcrumbNavigationComponent";

function AccountProfileComponent() {
  return (
    <MainContainer>
      <BreadcrumbNavigationComponent />
      <ContentContainer>
        <ProfileMenuComponent />
        <ProfileDataComponent />
      </ContentContainer>
    </MainContainer>
  );
}

export default memo(AccountProfileComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
}));
