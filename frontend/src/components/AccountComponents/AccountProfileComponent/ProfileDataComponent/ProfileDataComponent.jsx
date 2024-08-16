import { Box, Skeleton, Typography } from "@mui/material";
import ColumnContainer from 'components/_GlobalComponents/ColumnContainer';
import DataContainer from 'components/_GlobalComponents/DataContainer';
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DataActionComponent from './DataActionComponent';

function ProfileDataComponent() {
  const loading = useSelector((state) => state?.global?.loading);

  return (
    <MainContainer>
      <DataContainer>
        <ColumnContainer>
          {/* FIXME: add content to different component */}
          <Typography component='div' variant={"h3"}>
            {loading ? <Skeleton /> : <Skeleton />}
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
        </ColumnContainer>
        <ColumnContainer>
          {/* FIXME: add content to different component */}
          <Typography component='div' variant={"h3"}>
            {loading ? <Skeleton /> : <Skeleton />}
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
        </ColumnContainer>
      </DataContainer>
      <DataActionComponent />
      <ProductContainer>
        {loading ? (
          <Skeleton
            sx={{ width: "100%", height: 200 }}
            animation='wave'
            variant='rectangular'
          />
        ) : (
          <Skeleton
            sx={{ width: "100%", height: 200 }}
            animation='wave'
            variant='rectangular'
          />
        )}
        {loading ? (
          <Skeleton
            sx={{ width: "100%", height: 200 }}
            animation='wave'
            variant='rectangular'
          />
        ) : (
          <Skeleton
            sx={{ width: "100%", height: 200 }}
            animation='wave'
            variant='rectangular'
          />
        )}
      </ProductContainer>
    </MainContainer>
  );
}

export default memo(ProfileDataComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const ProductContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
