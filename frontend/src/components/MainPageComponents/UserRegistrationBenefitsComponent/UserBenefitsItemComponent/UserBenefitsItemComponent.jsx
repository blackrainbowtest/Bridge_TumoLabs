import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { memo } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function UserBenefitsItemComponent({ data }) {
  const navigate = useNavigate()

  const handleSignUpClick = () => {
    navigate(`sign-up/?type=${data.title.toLowerCase()}`)
  }
  return (
    <MainContainer>
      <CardMediaContainer component='img' alt='green iguana' height='340' image={data.image} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {data.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSignUpClick}>Sign up like {data.title.toLowerCase()}</Button>
      </CardActions>
    </MainContainer>
  );
}

export default memo(UserBenefitsItemComponent);

const MainContainer = styled(Card)(({ theme }) => ({
  width: "22%",
  padding: "10px",
  borderRadius: "5px",
  background: theme.palette.background.secondary,
}));

const CardMediaContainer = styled(CardMedia)(({ theme }) => ({
  borderRadius: "5px",
  objectFit: "cover",
}));
