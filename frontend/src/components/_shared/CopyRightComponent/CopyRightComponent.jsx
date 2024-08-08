import { Typography } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {"Copyright © "}
      <Link color='inherit' to={props.to ?? "http://localhost:3000"}>
        {props.coName ?? "Bridge"}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default memo(Copyright);
