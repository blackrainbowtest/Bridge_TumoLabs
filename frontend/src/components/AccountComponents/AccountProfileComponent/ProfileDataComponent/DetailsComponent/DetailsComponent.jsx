import { Skeleton, TextField, Typography } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function DetailsComponent({ isEdit }) {
  const loading = useSelector((state) => state?.global?.loading);
  const account = useSelector((state) => state?.account?.account);

  return (
    <MainContainerColumn>
      {loading ? (
        <Skeleton
          sx={{ width: 325, height: 40 }}
          animation='wave'
          variant='rounded'
        />
      ) : (
        <StyledTypography variant='h4'>
          {account?.first_name.trim() && account?.last_name.trim()
            ? `${account?.first_name} ${account?.last_name}`
            : "Your full name"}
        </StyledTypography>
      )}
      {loading ? (
        <Skeleton
          sx={{ width: "100%", height: 263 }}
          animation='wave'
          variant='rounded'
        />
      ) : (
        <TextField
          id='outlined-multiline-static'
          label='About Me'
          multiline
          disabled={!isEdit}
          rows={10}
          defaultValue={account?.profile?.bio}
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
