import { Box } from "@mui/material"
import { memo } from "react"
import styled from "styled-components"

function LogoFooterIconContainer() {
    return (
        <MainContainer>
            Bridge
        </MainContainer>
    )
}

export default memo(LogoFooterIconContainer)

const MainContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '35px',
    width: '20%',
    backgroundColor: `#c6d9ec!important`,
}))