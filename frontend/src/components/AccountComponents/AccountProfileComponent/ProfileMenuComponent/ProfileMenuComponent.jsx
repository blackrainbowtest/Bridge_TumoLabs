import { memo } from "react";
import ProfileImageComponent from "./ProfileImageComponent";
import ProfileMenuListComponent from "./ProfileMenuListComponent";
import styled from "styled-components";
import { Box } from "@mui/material";

function ProfileMenuComponent() {
  return (
    <MainContainer>
      <ProfileImageComponent />
      <ProfileMenuListComponent />
    </MainContainer>
  );
}

export default memo(ProfileMenuComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
