import { Box, Button, Skeleton, Typography } from "@mui/material";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ProfileMenuListComponent() {
  const loading = useSelector((state) => state?.global?.loading);

  return (
    <MainContainer>
      <Typography component='div' variant={"h3"}>
        {loading ? <Skeleton /> : <Button>Profile</Button>}
      </Typography>
      <Typography component='div' variant={"h3"}>
        {loading ? <Skeleton /> : <Skeleton />}
      </Typography>
      <Typography component='div' variant={"h3"}>
        {loading ? <Skeleton /> : <Skeleton />}
      </Typography>
      <Typography component='div' variant={"h3"}>
        {loading ? <Skeleton /> : <Skeleton />}
      </Typography>
    </MainContainer>
  );
}

export default memo(ProfileMenuListComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
  display: "flex",
  flexDirection: "column",
  "&& div": {
    minWidth: "300px",
    border: `1px solid ${theme.palette.border.secondary}`
  },
}));
