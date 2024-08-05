import { Box, Button, Typography } from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "images/noImages/noimage.jpg"
import styled from "styled-components";

function WorkSliderItemComponent({ slide }) {
  const navigate = useNavigate();

  const handleClick = () => {

      navigate(`/project/?id=${slide.id}`);
  };

  return (
    <SliderItemContainer style={{ backgroundImage: `url(${slide.bgImage || bgImage})` }}>
      <ContentContainer>
        <TitleTypography variant='h4' itemType='h4'>
          {slide.title.length > 24
            ? `${slide.title.substring(0, 24)}...`
            : slide.title}
        </TitleTypography>
        <DescriptionTypography variant='p' itemType='p'>
          {slide.description}
        </DescriptionTypography>
        <LinkButton variant='text' onClick={handleClick}>
          See project
        </LinkButton>
      </ContentContainer>
    </SliderItemContainer>
  );
}

export default memo(WorkSliderItemComponent);

const SliderItemContainer = styled(Box)(({ _ }) => ({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  userSelect: "none"
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  width: "500px",
  height: "190px",
  backgroundColor: theme.palette.background.secondary,
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "20px",
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: "bold",
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: "bold",
}));

const LinkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: "bold",
  padding: "0px!important",
}));
