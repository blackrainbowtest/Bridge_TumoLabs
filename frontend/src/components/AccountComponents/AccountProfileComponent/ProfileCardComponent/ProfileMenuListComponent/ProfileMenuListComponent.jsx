import { Skeleton } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import TagInputComponent from 'components/_shared/TagInputComponent';
import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
// import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import styled from "styled-components";

function ProfileMenuListComponent() {
  const loading = useSelector((state) => state?.global?.loading);
  const account = useSelector((state) => state?.account?.account);

  // FIXME: 
  // const methods = useForm({
  //   defaultValues: {

  //   },
  //   mode: "onChange", // or 'onBlur' ll update on submit click
  // })

  account && console.log(account);

  return (
    <MainContainer>
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        account && (
          <TextInputComponentStyled
            label='First name'
            variant='standard'
            defaultValue={account?.first_name}
            disabled
          />
        )
      )}
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        account && (
          <TextInputComponentStyled
            label='Last name'
            variant='standard'
            defaultValue={account?.last_name}
            disabled
          />
        )
      )}
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        account && <SkeletonContainer variant='rounded' />
      )}
      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        account && <SkeletonContainer variant='rounded' />
      )}

      {loading ? (
        <SkeletonLargeContainer variant='rounded' />
      ) : (
        account && <TagInputComponent />
      )}

      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        account && (
          <TextInputComponentStyled
            label='Email'
            variant='standard'
            type='email'
            defaultValue={account?.email}
            disabled
          />
        )
      )}

      {loading ? (
        <SkeletonContainer variant='rounded' />
      ) : (
        account && (
          <TextInputComponentStyled
            label='Phone number'
            variant='standard'
            type='tel'
            defaultValue={account?.profile?.phone_number}
            disabled
          />
        )
      )}
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
  flexGrow: 0,
}));

const SkeletonContainer = styled(Skeleton)(({ _ }) => ({
  minWidth: "270px",
  minHeight: "48px",
}));

const SkeletonLargeContainer = styled(Skeleton)(({ _ }) => ({
  minWidth: "270px",
  minHeight: "100px",
}));

const TextInputComponentStyled = styled(TextInputComponent)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: `${theme.palette.text.white} !important`,
  },
  "& .MuiFormLabel-root": {
    color: `${theme.palette.text.white} !important`,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: `${theme.palette.text.white} !important`,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: `${theme.palette.text.white} !important`,
  },
  "& .Mui-focused .MuiFormLabel-root": {
    color: `${theme.palette.text.white} !important`,
  },
  "& .Mui-disabled": {
    color: `${theme.palette.text.white} !important`,
    "& .MuiFormLabel-root": {
      color: `${theme.palette.text.white} !important`,
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: `${theme.palette.text.white} !important`,
    },
  },
}));
