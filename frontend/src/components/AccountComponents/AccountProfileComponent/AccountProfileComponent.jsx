import { memo } from "react";
import ProfileDataComponent from "./ProfileDataComponent";
import ProfileCardComponent from "./ProfileCardComponent";
import styled from "styled-components";
import { Box } from "@mui/material";
import BreadcrumbNavigationComponent from "components/_GlobalComponents/BreadcrumbNavigationComponent";
import MainGridContainer from 'components/_GlobalComponents/MainGridContainer';

function AccountProfileComponent() {
  return (
    <MainContainer>
      <BreadcrumbNavigationComponent />
      <MainGridContainer columns={2}>
        <ProfileCardComponent />
        <ProfileDataComponent />
      </MainGridContainer>
    </MainContainer>
  );
}

export default memo(AccountProfileComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
}));
