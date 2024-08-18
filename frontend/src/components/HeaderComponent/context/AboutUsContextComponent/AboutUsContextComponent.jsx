import { Box, MenuItem, Typography } from "@mui/material";
import { memo } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import FlagIcon from "@mui/icons-material/Flag";
import TimelineIcon from "@mui/icons-material/Timeline";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function AboutUsContextComponent({ handleClose }) {
  const navigate = useNavigate();
  const handleOurTeamClick = (event) => {
    navigate("/ourTeam");
    handleClose(event);
  };
  const handleOurGoalClick = (event) => {
    navigate("/ourGoal");
    handleClose(event);
  };
  const handleOurRoadmapClick = (event) => {
    navigate("/ourRoadmap");
    handleClose(event);
  };

  return (
    <>
      <MenuItem onClick={(event) => handleOurTeamClick(event)}>
        <ContentContainer color='inherit'>
          <GroupsIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Our Team
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleOurGoalClick(event)}>
        <ContentContainer color='inherit'>
          <FlagIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Our Goal
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleOurRoadmapClick(event)}>
        <ContentContainer color='inherit'>
          <TimelineIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Our Roadmap
          </Typography>
        </ContentContainer>
      </MenuItem>
    </>
  );
}

export default memo(AboutUsContextComponent);

const ContentContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  color: `${theme.palette.text.secondary}!important`,
}));
