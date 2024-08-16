import { Box, Typography } from "@mui/material";
import MainContainerRow from "components/_GlobalComponents/MainContainerRow";
import { memo } from "react";
import styled, { css } from "styled-components";
import ImageBG from "static/BG/AboutPlatformBG.png";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";
import { useNavigate } from 'react-router-dom';

function AboutPlatformComponent() {
    const navigate = useNavigate()

  const handleAboutPlatformClick = (event) => {
    navigate("sign-up")
  };

  return (
    <MainContainerRow>
      <BGContainer>
        <ContentContainer>
          <Box sx={{ maxWidth: 900 }}>
            <Typography component='div' variant={"h4"}>
              EMPOWERING GROWTH THROUGH STRATEGIC COLLABORATION
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 600 }}>
            <Typography component='div' variant={"h5"} color={"gray"}>
              Platform is providing toolset for SMEs to get reachable reaources,
              and Junior professionals hands-on experience
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 250, display: "flex", justifyContent: "center" }}>
            <ActionButtonComponent
              color='success'
              label='Get started'
              variant='outlined'
              customStyles={ActionButtonStyle}
              callback={handleAboutPlatformClick}
            />
          </Box>
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

const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexGrow: "1",
  gap: "50px",
}));

const ActionButtonStyle = ({ theme }) => css`
  min-width: 260px !important;
  min-height: 65px !important;
`;
