import { Skeleton, Typography } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import MainGridContainer from "components/_GlobalComponents/MainGridContainer";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ProjectComponent() {
  const loading = useSelector((state) => state?.global?.loading);

  return (
    <MainContainerColumn>
      {loading ? (
        <Skeleton
          sx={{ width: 325, height: 40 }}
          animation='wave'
          variant='rounded'
        />
      ) : (
        <StyledTypography variant='h4'>Projects</StyledTypography>
      )}
      <MainContainer>
        <GridContainer columns={4}>
          {loading ? (
            <Skeleton
              sx={{ width: 325, height: 440 }}
              animation='wave'
              variant='rounded'
            />
          ) : (
            <Skeleton
              sx={{ width: 325, height: 440 }}
              animation='wave'
              variant='rounded'
            />
          )}
          {loading ? (
            <Skeleton
              sx={{ width: 325, height: 440 }}
              animation='wave'
              variant='rounded'
            />
          ) : (
            <Skeleton
              sx={{ width: 325, height: 440 }}
              animation='wave'
              variant='rounded'
            />
          )}
          {loading ? (
            <Skeleton
              sx={{ width: 325, height: 440 }}
              animation='wave'
              variant='rounded'
            />
          ) : (
            <Skeleton
              sx={{ width: 325, height: 440 }}
              animation='wave'
              variant='rounded'
            />
          )}
          {loading ? (
            <Skeleton
              sx={{ width: 325, height: 440 }}
              animation='wave'
              variant='rounded'
            />
          ) : (
            <Skeleton
              sx={{ width: 325, height: 440 }}
              animation='wave'
              variant='rounded'
            />
          )}
        </GridContainer>
      </MainContainer>
    </MainContainerColumn>
  );
}

export default memo(ProjectComponent);

const MainContainer = styled(MainContainerColumn)(({ theme }) => ({
  alignItems: "center",
}));

const GridContainer = styled(MainGridContainer)(({ theme, columns }) => ({
  width: "100%",
  justifyContent: columns > 1 ? "space-between" : "space-around",
  "@media (min-width: 640px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 1)}, 1fr)`,
  },
  "@media (min-width: 1130px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 2)}, 1fr)`,
  },
  "@media (min-width: 1490px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 3)}, 1fr)`,
  },
  "@media (min-width: 1750px)": {
    gridTemplateColumns: `repeat(${Math.min(columns, 4)}, 1fr)`,
  },
}));

const StyledTypography = styled(Typography)(({ theme, columns }) => ({
  width: "325px",
  height: "40px",
}));

// `
//   width: 325px;
//   height: 40px;
//   display: flex;
//   align-items: center;  // Выравнивание текста по вертикали
//   justify-content: center; // Выравнивание текста по горизонтали
//   overflow: hidden; // Скрытие текста, который выходит за пределы элемента
//   background: #f0f0f0; // Цвет фона для имитации стиля Skeleton
// `;
