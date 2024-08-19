import { Box, Skeleton, Tooltip } from "@mui/material";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import noImage from "static/images/noImages/noimage.jpg";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import { editAccountImage } from "features/account/accountProfileEditAPI";

function ImageComponent() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.global?.loading);
  const account = useSelector((state) => state?.account?.account);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(editAccountImage(file));
    }
  };

  return (
    <MainContainer>
      {loading ? (
        <Skeleton
          sx={{ width: 300, height: 300 }}
          animation='wave'
          variant='circular'
        />
      ) : account?.profile_image ? (
        <ImageContainer
          sx={{
            backgroundImage: `url(${
              account?.profile_image.image?.includes("http")
                ? ""
                : process.env.REACT_APP_BASE_URL
            }${account?.profile_image.image})`,
          }}
        />
      ) : (
        <ImageContainer
          sx={{
            backgroundImage: `url(${noImage})`,
          }}
        />
      )}
      <ImageEditCntainer>
        <Tooltip title='Edit'>
          <EditButtonCntainer
            groupid={account?.group?.id}
            component='label'
            aria-label='edit'
            role={undefined}
            variant='contained'
            tabIndex={-1}
          >
            <EditIcon />
            <VisuallyHiddenInput
              type='file'
              accept='image/*'
              onChange={handleImageChange}
            />
          </EditButtonCntainer>
        </Tooltip>
      </ImageEditCntainer>
    </MainContainer>
  );
}

export default memo(ImageComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  position: "relative",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "@media (min-width: 360px)": {
    width: "150px",
    height: "150px",
  },
  "@media (min-width: 415px)": {
    width: "250px",
    height: "250px",
  },
  "@media (min-width: 640px)": {
    width: "300px",
    height: "300px",
  },
}));

const ImageEditCntainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "80%",
  left: "80%",
  border: `1px solid ${theme.palette.border.secondary}`,
  borderRadius: "50%",
}));

const EditButtonCntainer = styled(IconButton)(({ theme, groupid }) => ({
  backgroundColor: `${theme.palette.background.primary}!important`,
  color: `${
    groupid === 1
      ? theme.palette.text.yellow
      : groupid === 2
      ? theme.palette.text.blue
      : theme.palette.text.orange
  }!important`,
  border: `1px solid ${
    groupid === 1
      ? theme.palette.border.yellow
      : groupid === 2
      ? theme.palette.border.blue
      : theme.palette.border.orange
  }!important`,
  "&:hover": {
    backgroundColor: `${theme.palette.background.secondary}!important`,
  },
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
