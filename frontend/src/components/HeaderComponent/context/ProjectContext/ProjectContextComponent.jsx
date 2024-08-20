import { Box, MenuItem, Typography } from "@mui/material";
import { memo } from "react";
import ListIcon from '@mui/icons-material/List';
import StarIcon from '@mui/icons-material/Star';
import CategoryIcon from '@mui/icons-material/Category';
import AddIcon from '@mui/icons-material/Add';
import StarRateIcon from '@mui/icons-material/StarRate';
import InfoIcon from '@mui/icons-material/Info';

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ProjectsContextComponent({ handleClose }) {
  const navigate = useNavigate();

  const handleAllProjectsClick = (event) => {
    navigate("/all-projects");
    handleClose(event);
  };
  const handleFeaturedProjectsClick = (event) => {
    navigate("/featured-projects");
    handleClose(event);
  };
  const handleProjectCategoriesClick = (event) => {
    navigate("/project-categories");
    handleClose(event);
  };
  const handleSubmitProjectClick = (event) => {
    navigate("/add-new-project");
    handleClose(event);
  };
  const handleProjectSuccessStoriesClick = (event) => {
    navigate("/project-success-stories");
    handleClose(event);
  };
  const handleProjectGuidelinesClick = (event) => {
    navigate("/project-guidelines");
    handleClose(event);
  };

  return (
    <>
      <MenuItem onClick={(event) => handleAllProjectsClick(event)}>
        <ContentContainer color='inherit'>
          <ListIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            All Projects
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleFeaturedProjectsClick(event)}>
        <ContentContainer color='inherit'>
          <StarIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Featured Projects
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleProjectCategoriesClick(event)}>
        <ContentContainer color='inherit'>
          <CategoryIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Project Categories
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleSubmitProjectClick(event)}>
        <ContentContainer color='inherit'>
          <AddIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Add New Project
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleProjectSuccessStoriesClick(event)}>
        <ContentContainer color='inherit'>
          <StarRateIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Project Success Stories
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleProjectGuidelinesClick(event)}>
        <ContentContainer color='inherit'>
          <InfoIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Project Guidelines
          </Typography>
        </ContentContainer>
      </MenuItem>
    </>
  );
}

export default memo(ProjectsContextComponent);

const ContentContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  color: `${theme.palette.text.secondary}!important`,
}));
