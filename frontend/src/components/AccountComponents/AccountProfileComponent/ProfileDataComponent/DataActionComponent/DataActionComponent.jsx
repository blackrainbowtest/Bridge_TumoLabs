import { Box, Skeleton, Typography } from "@mui/material";
import ColumnContainer from "components/_GlobalComponents/ColumnContainer";
import DataContainer from "components/_GlobalComponents/DataContainer";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

function DataActionComponent() {
  const [isEdit, setIsEdit] = useState(false);
  const loading = useSelector((state) => state?.global?.loading);

  const handlebuttonClick = (event) => {
    setIsEdit(prev => !prev)
    console.log(event)
  }

  return (
    <DataContainer>
      <ColumnContainer></ColumnContainer>
      <ColumnContainer>
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
      </ColumnContainer>
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
