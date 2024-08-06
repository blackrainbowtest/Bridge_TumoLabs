import { Box } from '@mui/material';
import ContributeToProjectComponent from 'components/ContributeToProjectComponent';
import { memo } from 'react'
import styled from 'styled-components';

function ContributeToProject() {
    return(
        <MainContainer>
            <ContributeToProjectComponent />
        </MainContainer>
    )
}

export default memo(ContributeToProject)

const MainContainer = styled(Box)(({ _ }) => ({
    maxWidth: "100%",
    minHeight: "150px",
    paddingBottom: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }));