import { Box, MenuItem, Typography } from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import styled from "styled-components";

function ProjectContextComponent({ handleClose }) {
  const navigate = useNavigate();
  const handleLanguageChange = (event) => {
    navigate("/projects");
    handleClose(event);
  };

  return (
    <MenuItem onClick={(event) => handleLanguageChange(event)}>
      <ContentContainer color='inherit'>
        <WorkIcon color='inherit' />
        <Typography variant='subtitle1' gutterBottom color='inherit'>
          All projects
        </Typography>
      </ContentContainer>
    </MenuItem>
  );
}

export default memo(ProjectContextComponent);

const ContentContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  color: `${theme.palette.text.secondary}!important`,
}));
