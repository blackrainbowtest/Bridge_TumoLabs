import { Box, Skeleton } from "@mui/material";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ProfileImageComponent() {
  const loading = useSelector((state) => state?.global?.loading);

  return (
    <MainContainer>
      {loading ? (
        <Skeleton sx={{ width: 300, height: 300 }} animation='wave' variant='rectangular' />
      ) : (
        <Skeleton sx={{ width: 300, height: 300 }} animation='wave' variant='rectangular' />
      )}
    </MainContainer>
  );
}

export default memo(ProfileImageComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
}));
