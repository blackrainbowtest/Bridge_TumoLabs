import { Box, Skeleton, Tooltip } from "@mui/material";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import noImage from "static/images/noImages/noimage.jpg";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import { editAccountImage } from "features/account/accountProfileEditAPI";

function ProfileImageComponent() {
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
              account.profile_image.image.includes("http")
                ? ""
                : process.env.REACT_APP_BASE_URL
            }${account.profile_image.image})`,
          }}
        />
      ) : (
        <NoImageContainer />
      )}
      <ImageEditCntainer>
        <Tooltip title='Edit'>
          <IconButton
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
          </IconButton>
        </Tooltip>
      </ImageEditCntainer>
    </MainContainer>
  );
}

export default memo(ProfileImageComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  position: "relative",
}));

const NoImageContainer = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  backgroundImage: `url(${noImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const ImageEditCntainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "80%",
  left: "80%",
  border: `1px solid ${theme.palette.border.secondary}`,
  borderRadius: "50%",
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
