import { Box, Skeleton } from "@mui/material";
import MainContainerRow from "components/_GlobalComponents/MainContainerRow";
import MainGridContainer from "components/_GlobalComponents/MainGridContainer";
import { getProjects } from "features/project/projectGetAPI";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectItemComponent from 'components/ProjectsComponent/AllProjectsComponent/ProjectsListComponent/ProjectItemComponent';
import styled from 'styled-components';

function ProjectListComponent() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state?.project?.data);
  const loading = useSelector((state) => state?.global?.loading);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <MainContainerRow>
      <MainGridContainerStyled columns={4}>
        {loading ? (
          <Box sx={{ minWidth: "100%", minHeight: "370px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Skeleton variant='rectangular' width={510} height={370} />
          </Box>
        ) : (
          projects.map((project) => {
            return (
              <ProjectItemComponent key={project.id} project={project} />
            );
          })
        )}
      </MainGridContainerStyled>
    </MainContainerRow>
  );
}

export default memo(ProjectListComponent);

const MainGridContainerStyled = styled(MainGridContainer)(({ theme, columns }) => ({
  "@media (min-width: 640px)": {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
    gap: theme.spacing(1.5),
  },
  "@media (min-width: 900px)": {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.min(columns, 2)}, 1fr)`,
    gap: theme.spacing(2),
  },
  "@media (min-width: 1300px)": {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.min(columns, 3)}, 1fr)`,
    gap: theme.spacing(2.5),
  },
  "@media (min-width: 1600px)": {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.min(columns, 4)}, 1fr)`,
    gap: theme.spacing(3),
  },
}));