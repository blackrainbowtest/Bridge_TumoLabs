import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ActionButtonComponent from "components/_shared/Buttons/ActionButtonComponent";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

function UserBenefitsItemComponent({ data }) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate(`${data.url.toLowerCase()}`);
  };
  return (
    <MainFrame>
      <MainContainer datatype={data.title}>
        <CardMediaContainer
          component='img'
          alt='green iguana'
          height='340'
          image={data.image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ fontWeight: 700 }}
          >
            {data.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {data.description}
          </Typography>
        </CardContent>
      </MainContainer>
      <CardActions>
        <ActionButtonComponent
          size='medium'
          callback={handleSignUpClick}
          label='Register as'
          variant='contained'
          customStyles={ActionButtonStyle}
          datatype={data.title}
        />
      </CardActions>
    </MainFrame>
  );
}

export default memo(UserBenefitsItemComponent);

const MainFrame = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px"
}));

const MainContainer = styled(Card)(({ theme, datatype }) => ({
  maxWidth: "430px",
  minHeight: "560px",
  padding: "30px",
  borderRadius: "25px!important",
  background: theme.palette.background.secondary,
  border: `1px solid ${
    datatype === "SME"
      ? theme.palette.text.blue
      : datatype === "Student"
      ? theme.palette.text.yellow
      : theme.palette.text.orange
  }`,
}));

const CardMediaContainer = styled(CardMedia)(({ theme }) => ({
  borderRadius: "15px",
  objectFit: "cover",
}));

const ActionButtonStyle = ({ theme, datatype }) => css`
  min-width: 192px !important;
  min-height: 52px !important;
  border-radius: 15px!important;
  background-color: ${datatype === "SME"
    ? theme.palette.text.blue
    : datatype === "Student"
    ? theme.palette.text.yellow
    : theme.palette.text.orange}!important;
`;
