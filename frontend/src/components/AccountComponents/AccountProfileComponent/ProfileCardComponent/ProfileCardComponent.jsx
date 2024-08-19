import { memo } from "react";
import ImageComponent from "./ImageComponent";
import ProfileMenuListComponent from "./ProfileMenuListComponent";
import styled from "styled-components";
import { Box } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import { useSelector } from "react-redux";
import SocialMediaIconsComponent from "./SocialMediaIconsComponent";

function ProfileCardComponent() {
  const account = useSelector((state) => state?.account?.account);
  return (
    <MainContainerColumn>
      <ContentContainer groupid={account?.group?.id}>
        <ImageComponent />
        <ProfileMenuListComponent />
        <SocialMediaIconsComponent />
      </ContentContainer>
    </MainContainerColumn>
  );
}

export default memo(ProfileCardComponent);

const ContentContainer = styled(Box)(({ theme, groupid }) => ({
  maxWidth: "100%",
  flexGrow: 1,
  display: "flex",
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(2),
  backgroundColor:
    groupid === 1
      ? theme.palette.background.yellow
      : groupid === 2
      ? theme.palette.background.blue
      : theme.palette.background.orange,
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1),
  "@media (min-width: 360px)": {
    padding: theme.spacing(1),
  },
  "@media (min-width: 415px)": {
    padding: theme.spacing(2),
  },
  "@media (min-width: 640px)": {
    padding: theme.spacing(4),
  },
}));
