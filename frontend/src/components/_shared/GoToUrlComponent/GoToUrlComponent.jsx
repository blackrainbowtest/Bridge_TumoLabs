import { Typography } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";

function GoToUrlComponent(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {props.labeltextbefore ?? "You already have an account? Please "}
      <Link color='inherit' to={props.to ?? "http://localhost:3000/sign-in"}>
        {props.label ?? "SignIn"}
      </Link>
    </Typography>
  );
}

export default memo(GoToUrlComponent);
