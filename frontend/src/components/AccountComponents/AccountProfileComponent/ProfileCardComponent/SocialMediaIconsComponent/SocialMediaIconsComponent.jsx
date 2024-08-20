import { IconButton, Skeleton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MainContainerRow from "components/_GlobalComponents/MainContainerRow";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function SocialMediaIconsComponent() {
  const loading = useSelector((state) => state?.global?.loading);
  const account = useSelector((state) => state?.account?.account);

  return (
    <MainContainerRowContainer>
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        account && (
          <EditButtonCntainer>
            <InstagramIcon />
          </EditButtonCntainer>
        )
      )}
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        account && (
          <EditButtonCntainer>
            <TwitterIcon />
          </EditButtonCntainer>
        )
      )}
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        account && (
          <EditButtonCntainer>
            <FacebookIcon />
          </EditButtonCntainer>
        )
      )}
    </MainContainerRowContainer>
  );
}

export default memo(SocialMediaIconsComponent);

const MainContainerRowContainer = styled(MainContainerRow)(({ _ }) => ({
  justifyContent: "center",
  alignItems: "flex-start",
}));

const SkeletonContainer = styled(Skeleton)(({ theme }) => ({
  minWidth: "50px",
  minHeight: "50px",
  borderRadius: `${theme.spacing(2)}!important`,
}));

const EditButtonCntainer = styled(IconButton)(({ theme, groupid }) => ({
  width: "50px",
  height: "50px",
  backgroundColor: `${theme.palette.background.primary}!important`,
  color: `${
    groupid === 1
      ? theme.palette.text.yellow
      : groupid === 2
      ? theme.palette.text.blue
      : theme.palette.text.orange
  }!important`,
  border: `1px solid ${
    groupid === 1
      ? theme.palette.border.yellow
      : groupid === 2
      ? theme.palette.border.blue
      : theme.palette.border.orange
  }!important`,
  "&:hover": {
    backgroundColor: `${theme.palette.background.secondary}!important`,
  },
}));
