import { Box, MenuItem, Typography } from "@mui/material";
import { memo } from "react";
import UpdateIcon from '@mui/icons-material/Update';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function InformationCenterContextComponent({ handleClose }) {
  const navigate = useNavigate();

  const handleLatestUpdatesClick = (event) => {
    navigate("/latest-updates");
    handleClose(event);
  };
  const handlePressReleasesClick = (event) => {
    navigate("/press-releases");
    handleClose(event);
  };
  const handleIndustryNewsClick = (event) => {
    navigate("/industry-news");
    handleClose(event);
  };
  const handleEventsClick = (event) => {
    navigate("/events");
    handleClose(event);
  };
  const handleBlogClick = (event) => {
    navigate("/blog");
    handleClose(event);
  };

  return (
    <>
      <MenuItem onClick={(event) => handleLatestUpdatesClick(event)}>
        <ContentContainer color='inherit'>
          <UpdateIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Latest Updates
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handlePressReleasesClick(event)}>
        <ContentContainer color='inherit'>
          <AnnouncementIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Press Releases
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleIndustryNewsClick(event)}>
        <ContentContainer color='inherit'>
          <BusinessCenterIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Industry News
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleEventsClick(event)}>
        <ContentContainer color='inherit'>
          <EventIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Events
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleBlogClick(event)}>
        <ContentContainer color='inherit'>
          <ArticleIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Blog
          </Typography>
        </ContentContainer>
      </MenuItem>
    </>
  );
}

export default memo(InformationCenterContextComponent);

const ContentContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  color: `${theme.palette.text.secondary}!important`,
}));
