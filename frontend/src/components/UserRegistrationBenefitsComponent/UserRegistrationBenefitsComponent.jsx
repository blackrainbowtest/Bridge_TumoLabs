import { Box } from '@mui/material';
import BenefitsItemComponent from 'components/BenefitsItemComponent';
import { memo } from 'react'
import styled from 'styled-components';

const BenefitsData = [
    { id: 'BA001', url: '/sign-up/student', title: '', description: '' },
    { id: 'BA002', url: '/sign-up/university', title: '', description: '' },
    { id: 'BA003', url: '/sign-up/company', title: '', description: '' },

]
function UserRegistrationBenefitsComponent() {
    return (
        <MainContainer>
            <BenefitsItemComponent props={''} />
        </MainContainer>
    )
}

export default memo(UserRegistrationBenefitsComponent)

const MainContainer = styled(Box)(({ _ }) => ({
    minWidth: "100%",
    minHeight: "600px",
    paddingBottom: "30px",
    display: "flex",
    justifyContent: "center",
    border: '1px solid black',
}));