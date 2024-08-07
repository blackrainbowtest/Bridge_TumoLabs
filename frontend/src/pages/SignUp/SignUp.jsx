import { Box } from '@mui/material';
import UserSignUpComponent from 'components/UserSignUpComponent';
import { memo } from "react";
import styled from 'styled-components';

function SignUp() {
  return (
    <MainContainer>
      <UserSignUpComponent />
    </MainContainer>
  );
}

export default memo(SignUp);

const MainContainer = styled(Box)(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: `${theme.palette.background.secondary}!important`,
  }));
