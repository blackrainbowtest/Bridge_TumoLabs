import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import BGimage from "static/BG/SVG/role.svg";
import styled from "styled-components";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import MainContainerRow from "components/_GlobalComponents/MainContainerRow";
import ActionButtonComponent from "components/_shared/Buttons/ActionButtonComponent";

function AboutAccountInfoComponent() {
  const navigate = useNavigate();

  const scrollToTarget = () => {
    navigate("sign-up");
  };

  return (
    <MainContainerColumn>
      <MainContainerRowContainer>
        <ImageContainer />
        <PathContainer></PathContainer>
        <PathContainer>
          <Typography variant='h4' color='text.secondary' align='left'>
            Our mission is to facilitate meaningful collaborations that drive
            growth and provide valuable hands-on experience.Whether you're
            seeking innovative solutions or ready to launch your career, choose
            your role, collaborate through the platform, and unlock resources to
            make an impact.
          </Typography>
          <ActionButtonComponentContainer
            size='large'
            callback={scrollToTarget}
            label='Chose your role'
            variant='contained'
          />
        </PathContainer>
      </MainContainerRowContainer>
    </MainContainerColumn>
  );
}

export default memo(AboutAccountInfoComponent);

const MainContainerRowContainer = styled(MainContainerRow)(({ theme }) => ({
  minHeight: "500px",
}));


const ActionButtonComponentContainer = styled(ActionButtonComponent)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.blue}!important`
}));

const PathContainer = styled(Box)(({ theme }) => ({
  width: "45%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "20px",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "500px",
  height: "500px",
  backgroundImage: `url(${BGimage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  top: "50%",
  left: "10%",
  transform: "translateY(-40%)",
}));
