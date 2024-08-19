import { Skeleton, Typography } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function DetailsComponent() {
  const loading = useSelector((state) => state?.global?.loading);
  const account = useSelector((state) => state?.account?.account);

  console.log(account?.username, account?.last_name, account?.first_name)

  return (
    <MainContainerColumn>
      {loading ? (
        <Skeleton
          sx={{ width: 325, height: 40 }}
          animation='wave'
          variant='rounded'
        />
      ) : (
        <StyledTypography variant='h4'>Full Name</StyledTypography>
      )}
      {loading ? (
        <Skeleton
          sx={{ width: "100%", height: 300 }}
          animation='wave'
          variant='rounded'
        />
      ) : (
        <Skeleton
          sx={{ width: "100%", height: 300 }}
          animation='wave'
          variant='rounded'
        />
      )}
    </MainContainerColumn>
  );
}

export default memo(DetailsComponent);

const StyledTypography = styled(Typography)(({ theme, columns }) => ({
  width: "325px",
  height: "40px",
}));
