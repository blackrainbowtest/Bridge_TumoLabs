import { Box, MenuItem, Typography } from "@mui/material";
import { memo } from "react";
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BuildIcon from '@mui/icons-material/Build';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PublicIcon from '@mui/icons-material/Public';
import WorkIcon from '@mui/icons-material/Work';

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ContactUsContextComponent({ handleClose }) {
  const navigate = useNavigate();
  
  const handleStudentSupportClick = (event) => {
    navigate("/student-support");
    handleClose(event);
  };
  const handleBusinessInquiriesClick = (event) => {
    navigate("/business-inquiries");
    handleClose(event);
  };
  const handleInternshipOpportunitiesClick = (event) => {
    navigate("/internship-opportunities");
    handleClose(event);
  };
  const handleCollaborationRequestsClick = (event) => {
    navigate("/collaboration-requests");
    handleClose(event);
  };
  const handleTechnicalSupportClick = (event) => {
    navigate("/technical-support");
    handleClose(event);
  };
  const handleFeedbackClick = (event) => {
    navigate("/feedback");
    handleClose(event);
  };
  const handleMediaInquiriesClick = (event) => {
    navigate("/media-inquiries");
    handleClose(event);
  };
  const handleCareerClick = (event) => {
    navigate("/career");
    handleClose(event);
  };

  return (
    <>
      <MenuItem onClick={(event) => handleStudentSupportClick(event)}>
        <ContentContainer color='inherit'>
          <SchoolIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Student Support
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleBusinessInquiriesClick(event)}>
        <ContentContainer color='inherit'>
          <BusinessIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Business Inquiries
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleInternshipOpportunitiesClick(event)}>
        <ContentContainer color='inherit'>
          <WorkOutlineIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Internship Opportunities
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleCollaborationRequestsClick(event)}>
        <ContentContainer color='inherit'>
          <HandshakeIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Collaboration Requests
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleTechnicalSupportClick(event)}>
        <ContentContainer color='inherit'>
          <BuildIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Technical Support
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleFeedbackClick(event)}>
        <ContentContainer color='inherit'>
          <FeedbackIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Feedback
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleMediaInquiriesClick(event)}>
        <ContentContainer color='inherit'>
          <PublicIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Media Inquiries
          </Typography>
        </ContentContainer>
      </MenuItem>
      <MenuItem onClick={(event) => handleCareerClick(event)}>
        <ContentContainer color='inherit'>
          <WorkIcon color='inherit' />
          <Typography variant='subtitle1' gutterBottom color='inherit'>
            Career
          </Typography>
        </ContentContainer>
      </MenuItem>
    </>
  );
}

export default memo(ContactUsContextComponent);

const ContentContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  color: `${theme.palette.text.secondary}!important`,
}));
