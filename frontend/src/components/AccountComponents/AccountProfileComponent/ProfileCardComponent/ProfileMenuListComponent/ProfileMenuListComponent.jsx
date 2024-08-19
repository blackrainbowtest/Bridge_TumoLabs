import { Box, Skeleton } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ProfileMenuListComponent() {
  const loading = useSelector((state) => state?.global?.loading);

  return (
    <MainContainer>
      {loading ? <SkeletonContainer variant="rounded" /> : <SkeletonContainer variant="rounded" />}
      {loading ? <SkeletonContainer variant="rounded" /> : <SkeletonContainer variant="rounded" />}
      {loading ? <SkeletonContainer variant="rounded" /> : <SkeletonContainer variant="rounded" />}

      {loading ? <SkeletonLargeContainer variant="rounded" /> : <SkeletonLargeContainer variant="rounded" />}

      {loading ? <SkeletonContainer variant="rounded" /> : <SkeletonContainer variant="rounded" />}
      {loading ? <SkeletonContainer variant="rounded" /> : <SkeletonContainer variant="rounded" />}
    </MainContainer>
  );
}

export default memo(ProfileMenuListComponent);

// const ListItemContainer = styled(Box)(({ theme }) => ({
//   minWidth: "270px",
//   minHeight: "40px",
//   display: "flex",
//   alignItems: "center",
//   border: `1px solid ${theme.palette.border.secondary}`,
// }));

const MainContainer = styled(MainContainerColumn)(({ _ }) => ({
  flexGrow: 0
}));

const SkeletonContainer = styled(Skeleton)(({ _ }) => ({
  minWidth: "270px",
  minHeight: "40px",
}));

const SkeletonLargeContainer = styled(Skeleton)(({ _ }) => ({
  minWidth: "270px",
  minHeight: "100px",
}));
