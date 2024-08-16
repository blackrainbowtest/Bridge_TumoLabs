import { Box, Button, Typography } from "@mui/material";
import MainContainerRow from "components/_GlobalComponents/MainContainerRow";
import { memo } from "react";
import styled, { css } from "styled-components";
import ImageBG from "static/BG/AboutPlatformBG.png";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";
import { useNavigate } from "react-router-dom";
import { clamp } from "date-fns";

function AboutPlatformComponent() {
  const navigate = useNavigate();

  const handleAboutPlatformClick = (event) => {
    navigate("sign-up");
  };

  return (
    <MainContainerRow>
      <BGContainer>
        <ContentContainer>
          <TitleContainer>
            EMPOWERING GROWTH THROUGH STRATEGIC COLLABORATION
          </TitleContainer>
          <TextContainer>
            Platform is providing toolset for SMEs to get reachable reaources,
            and Junior professionals hands-on experience
          </TextContainer>
          <ActionButtonComponent
            color='success'
            label='Get started'
            variant='contained'
            customStyles={ActionButtonStyle}
            callback={handleAboutPlatformClick}
          />
        </ContentContainer>
        <ContentContainer></ContentContainer>
      </BGContainer>
    </MainContainerRow>
  );
}

export default memo(AboutPlatformComponent);

const BGContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  minHeight: "750px",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: "1",
  backgroundImage: `url(${ImageBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

// const ContentContainer = styled(Box)(({ theme }) => ({
//   maxWidth: "100%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   flexGrow: "1",
//   gap: "50px",
// }));

const ActionButtonStyle = ({ theme }) => css`
  min-width: 260px !important;
  min-height: 65px !important;
`;

const ContentContainer = styled(Box)(({ theme }) => ({
  marginLeft: "100px",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  // border:'1px solid black',
  rowGap: "40px",
}));
const TitleContainer = styled(Box)(({ theme }) => ({
  width: clamp("200px", "20vw", "900px"),
  // height: '244px',
  fontFamily: "Inter,sans-serif",
  letterSpacing: "4%",
  fontSize: "56px",
  color: "#000000",
  // textAlign:'center',
}));
const TextContainer = styled(Box)(({ theme }) => ({
  width: "873px",
  height: "194px",
  fontFamily: "Inter,sans-serif",
  fontSize: "35px",
  color: "#8E8E8E",
}));
const StartedButton = styled(Button)(({ theme }) => ({
  width: "334px",
  height: "65px",
  // backgroundColor:'#076D41',
  border: "0.5px solid #D9D9D9",
  fontSize: "17px",
  color: "#FFFFFF",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
