import { Box, Skeleton, Typography } from "@mui/material";
import DataContainer from "components/_GlobalComponents/DataContainer";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

function DataActionComponent({ isEdit, setIsEdit, callback = () => {} }) {
  const loading = useSelector((state) => state?.global?.loading);

  const handlebuttonClick = useCallback(() => {
    if (isEdit) {
      callback();
    }
    setIsEdit((prev) => !prev);
  }, [setIsEdit, isEdit, callback]);

  return (
    <DataContainer>
      <MainContainerColumn></MainContainerColumn>
      <MainContainerColumn>
        <Typography component='div' variant={"h3"}>
          {loading ? (
            <Skeleton />
          ) : (
            <MainContainer>
              {isEdit ? (
                <ActionButtonComponent
                  label='Save'
                  type={"submit"}
                  customStyles={ActionButtonStyle}
                  variant='contained'
                  color='success'
                  callback={handlebuttonClick}
                />
              ) : (
                <ActionButtonComponent
                  label='Edit'
                  type={"submit"}
                  customStyles={ActionButtonStyle}
                  variant='contained'
                  color='warning'
                  callback={handlebuttonClick}
                />
              )}
            </MainContainer>
          )}
        </Typography>
      </MainContainerColumn>
    </DataContainer>
  );
}

export default memo(DataActionComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  fontSize: "18px",

  "@media (max-width: 900px)": {
    justifyContent: "flex-start",
  },
}));

const ActionButtonStyle = ({ theme }) => css`
  min-width: 160px !important;
  min-height: 32px !important;
`;
