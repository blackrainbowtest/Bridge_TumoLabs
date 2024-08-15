import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import BreadcrumbNavigationComponent from 'components/_GlobalComponents/BreadcrumbNavigationComponent';
import { memo } from "react";
import styled from "styled-components";

function AccountSettingsComponent() {
  return (
    <MainContainer>
      <BreadcrumbNavigationComponent />
      <Typography variant='h3' gutterBottom>
        Settings
      </Typography>
      <Skeleton width='100%' animation='wave'>
        <Typography>.</Typography>
        <Avatar />
      </Skeleton>
      <Skeleton width='100%' animation='wave'>
        <Typography>.</Typography>
      </Skeleton>

      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
      <Skeleton animation='wave' variant='rectangular' width='100%'>
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
    </MainContainer>
  );
}

export default memo(AccountSettingsComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
