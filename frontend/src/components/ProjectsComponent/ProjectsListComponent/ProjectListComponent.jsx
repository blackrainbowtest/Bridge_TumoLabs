import { Box, Skeleton } from "@mui/material";
import MainContainerRow from "components/_GlobalComponents/MainContainerRow";
import MainGridContainer from "components/_GlobalComponents/MainGridContainer";
import { getProjects } from "features/project/projectGetAPI";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectItemComponent from './ProjectItemComponent';

function ProjectListComponent() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state?.project?.data);
  const loading = useSelector((state) => state?.global?.loading);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <MainContainerRow>
      <MainGridContainer columns={4}>
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
      </MainGridContainer>
    </MainContainerRow>
  );
}

export default memo(ProjectListComponent);
