import { Box, Button } from '@mui/material';
import { memo } from 'react'
import styled from 'styled-components';
import bgimagine from 'static/images/noImages/coperate.png'
import { clamp } from 'date-fns';
function LatestBusinessProjects() {
   
    return (
        <MainContainer>
            <ContentContainer>
                <TitleContainer>
                    EMPOWERING GROWTH THROUGH STRATEGIC COLLABORATION
                </TitleContainer>
                <TextContainer>
                    Platform is providing toolset for SMEs to get reachable reaources, and Junior professionals hands-on experience
                </TextContainer>
                <StartedButton variant='contained' color='success'>
                    Get Started
                </StartedButton>
            </ContentContainer>
<ImageContainer>
   
</ImageContainer>
        </MainContainer>
    )
}

export default memo(LatestBusinessProjects)

const MainContainer = styled(Box)(({ theme }) => ({
    maxWidth: "100%",
    minHeight:'100vh',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
}));
const ContentContainer = styled(Box)(({ theme }) => ({
    marginLeft:'100px',
    width: '50%',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    // border:'1px solid black',
    rowGap:'40px',
}));
const TitleContainer = styled(Box)(({ theme }) => ({
    width:clamp('200px','20vw','900px'),
    // height: '244px',
    fontFamily: 'Inter,sans-serif',
    letterSpacing: '4%',
    fontSize: '56px',
    color: '#000000',
    // textAlign:'center',

}))
const TextContainer = styled(Box)(({ theme }) => ({
    width: '873px',
    height: '194px',
    fontFamily: 'Inter,sans-serif',
    fontSize: '35px',
    color: '#8E8E8E',
    // textAlign:'center'
}))
const StartedButton = styled(Button)(({ theme }) => ({
width:'334px',
height:'65px',
// backgroundColor:'#076D41',
border:"0.5px solid #D9D9D9",
fontSize:'17px',
color:'#FFFFFF',
borderRadius:'20px',
display:'flex',
justifyContent:'center',
alignItems:'center'

}))
const ImageContainer=styled(Box)(({theme})=>({
width:'50%',
backgroundImage:`url(${bgimagine})`,
backgroundSize:'cover',
backgroundPosition:'center',
height:'700px'
}))