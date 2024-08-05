import { Box } from '@mui/material';
import { memo } from 'react'
import styled from 'styled-components';

function WorkSlider() {
    return(
        <MainContainer>
            WorkSlider
        </MainContainer>
    )
}

export default memo(WorkSlider)

const MainContainer = styled(Box)(({ theme }) => ({
    maxWidth: "100%",
    minHeight: "650px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.action
  }));