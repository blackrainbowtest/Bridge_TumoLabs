import { Button } from "@mui/material";
import { memo } from "react";
import styled, { css } from "styled-components";

function ActionButtonComponent({
  callback = () => {},
  label = "Add",
  customStyles,
  isOpen = false,
  type = "button",
  variant = "text",
  color = "primary",
}) {
  const handleMouseDownAction = (event) => {
    event.preventDefault();
  };

  const handleClickAction = (event) => {
    event.stopPropagation();
    if (typeof callback === "function") {
      callback(event);
    }
  };

  return (
    <ActionContent
      onClick={handleClickAction}
      onMouseDown={handleMouseDownAction}
      customstyles={customStyles}
      isopen={isOpen.toString()}
      type={type}
      variant={variant}
      color={color}
    >
      {label}
    </ActionContent>
  );
}

export default memo(ActionButtonComponent);

const ActionContent = styled(({ customstyles, ...otherProps }) => (
  <Button {...otherProps} />
))(
  ({ theme, customstyles, isopen }) => css`
    z-index: 1;
    ${isopen === "true" &&
    css`
      transform: translateX(-50px);
    `}
    transition: transform 0.3s ease!important;
    ${customstyles}
  `
);
