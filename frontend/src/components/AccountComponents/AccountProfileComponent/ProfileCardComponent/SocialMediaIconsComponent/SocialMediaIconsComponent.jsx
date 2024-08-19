import { Skeleton } from "@mui/material";
import MainContainerRow from "components/_GlobalComponents/MainContainerRow";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function SocialMediaIconsComponent() {
  const loading = useSelector((state) => state?.global?.loading);

  return (
    <MainContainerRowContainer>
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        <SkeletonContainer variant='rounded' />
      )}
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        <SkeletonContainer variant='rounded' />
      )}
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        <SkeletonContainer variant='rounded' />
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
  borderRadius: `${theme.spacing(2)}!important`
}));
