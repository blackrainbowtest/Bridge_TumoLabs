import { Box, Typography } from "@mui/material";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import noIMG from "static/images/noImages/noimage.jpg";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { differenceInDays } from "date-fns";

function ProjectItemComponent({ project }) {
  const navigate = useNavigate();
  const handleButtonClick = (_) => {
    navigate(`/projects/${project.id}`);
  };

  const startDate = new Date(project.start_date);
  const endDate = new Date(project.end_date);
  const projectDuration = differenceInDays(endDate, startDate);

  return (
    <MainContainer>
      <ItemContainer>
        <Typography variant='h4' gutterBottom>
          <LinkContainer to={`${project.id}`}>{project.title}</LinkContainer>
        </Typography>

        {project.images.length ? (
          project.images?.map((elem) => {
            return (
              elem?.is_main && (
                <img
                  src={elem.image}
                  style={{ width: "290px", height: "290px" }}
                  alt=''
                />
              )
            );
          })
        ) : (
          <img src={noIMG} style={{ width: "290px", height: "290px" }} alt='' />
        )}

        <InfoContainer>
          <InfoContent>
            <SettingsOutlinedIcon
              style={{ width: "24px", height: "24px", fontSize: "16px" }}
              color='warning'
            />
            {project.business_name}
          </InfoContent>
          <InfoContent>
            <FmdGoodOutlinedIcon
              style={{ width: "24px", height: "24px", fontSize: "16px" }}
              color='warning'
            />
            <Typography variant='p' gutterBottom>
              {project.location}
            </Typography>
          </InfoContent>
        </InfoContainer>

        <Box sx={{ display: "flex" }}>
          {project.skills_required.map((skill) => {
            return (
              <Box
                key={skill.id}
                sx={{
                  borderRadius: "5px",
                  backgroundColor: "lightGrey",
                  padding: "5px 15px",
                }}
              >
                {skill.name}
              </Box>
            );
          })}
        </Box>

        <Typography variant='p' gutterBottom>
          {project.description}
        </Typography>

        <ActionContainer>
          <ScheduleOutlinedIcon
            style={{ width: "24px", height: "24px", fontSize: "16px" }}
            color='warning'
          />
          <InfoContent>
            <Typography variant='p' gutterBottom>
              {`${projectDuration} days left`}
            </Typography>
          </InfoContent>

          <ActionButtonComponent
            label='See more'
            // color='success'
            variant='outlined'
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
}));

const ItemContainer = styled(Box)(({ theme }) => ({
  maxWidth: "390px",
  minHeight: "606px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexGrow: 1,
  boxShadow: "1.5px 1.5px 3px 3px #219BBA",
  gap: "10px",
  borderRadius: "15px",
  padding: theme.paddingX,
  border: `1px solid ${theme.palette.border.secondary}`,
  "&:hover": {
    backgroundColor: theme.palette.background.secondary,
  },
}));

const LinkContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "26px",
  color: theme.palette.text.secondary,
  width: "auto",
  // whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "&:hover": {
    color: theme.palette.text.blue,
  },
}));

const InfoContainer = styled(Box)(({ _ }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexGrow: 1,
  gap: "30px",
}));

const InfoContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: theme.palette.text.secondary,
  "& :last-child": {
    fontSize: "80.5%",
  },
}));

const ActionContainer = styled(Box)(({ _ }) => ({
  minWidth: "100%",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  gap: "10px",
}));
