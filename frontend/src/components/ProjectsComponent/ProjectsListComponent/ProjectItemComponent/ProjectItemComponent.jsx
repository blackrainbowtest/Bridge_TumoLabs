import { Box, Typography } from "@mui/material";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function ProjectItemComponent({ project }) {
  console.log(project);

  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    console.log(555);
    navigate(`/projects/${project.id}`);
  };

  return (
    <MainContainer>
      <ItemContainer>
        <Typography variant='h4' gutterBottom>
          <LinkContainer to={`${project.id}`}>{project.title}</LinkContainer>
        </Typography>
        <InfoContainer>
          <InfoContent>
            <Typography variant='p' gutterBottom>
              {project.budget} ֏
            </Typography>
            <Typography variant='p' gutterBottom>
              Fixed-price
            </Typography>
          </InfoContent>
          {/* DateInfo */}
          <InfoContent>
            <Typography variant='p' gutterBottom>
              {project.start_date}
            </Typography>
            <Typography variant='p' gutterBottom>
              Start date
            </Typography>
          </InfoContent>
          <InfoContent>
            <Typography variant='p' gutterBottom>
              {project.end_date}
            </Typography>
            <Typography variant='p' gutterBottom>
              End date
            </Typography>
          </InfoContent>
          <InfoContent>
            <Typography variant='p' gutterBottom>
              {project.location}
            </Typography>
          </InfoContent>
        </InfoContainer>
        <Typography variant='p' gutterBottom>
          {project.description}
        </Typography>
        <ActionContainer>
          <ActionButtonComponent
            label='See more'
            color='success'
            variant='contained'
            callback={handleButtonClick}
          />
        </ActionContainer>
      </ItemContainer>
    </MainContainer>
  );
}

export default memo(ProjectItemComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  minHeight: "370px",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  "& :hover": {
    backgroundColor: theme.palette.background.secondary
  }
}));

const ItemContainer = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  minHeight: "370px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: "10px",
  borderRadius: "5px",
  padding: theme.paddingX,
  border: `1px solid ${theme.palette.border.secondary}`,
}));

const LinkContainer = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "26px",
  color: theme.palette.text.secondary,
  width: "auto",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "&:hover": {
    color: theme.palette.text.blue,
  },
}));

const InfoContainer = styled(Box)(({ _ }) => ({
  minWidth: "100%",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  gap: "30px",
}));

const InfoContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: theme.palette.text.secondary,
  "& :last-child": {
    fontSize: "80.5%"
  }
}));

const ActionContainer = styled(Box)(({ _ }) => ({
  minWidth: "100%",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
}));
