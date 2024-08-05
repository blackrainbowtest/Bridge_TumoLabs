import { Box } from '@mui/material';
import { memo } from "react";
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function SignUp() {
  return (
    <MainContainer>
      SignUp
      <Outlet/>
    </MainContainer>
  );
}

export default memo(SignUp);

/**
 * Styles
 */
const MainContainer = styled(Box)(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: `${theme.palette.background.main}!important`,
  }));
