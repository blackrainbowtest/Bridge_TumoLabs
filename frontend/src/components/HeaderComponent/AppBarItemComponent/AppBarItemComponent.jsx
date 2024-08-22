import {
  Button,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { memo, useEffect, useRef, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { cloneElement, Children } from "react";
import styled from "styled-components";

/**
 * AppBarItemComponent
 *
 * A component that displays a button with a (`label`) in the `AppBar`.
 * Clicking the button opens a drop-down menu, the contents of which are passed through `children`.
 * If the `showArrow` prop is passed, an arrow is displayed next to the label, which changes direction depending on the menu state (open/closed).
 *
 * @param {Object} param0
 * @param {ReactNode} param0.children - elements that will be displayed in the drop-down menu.
 * @param {string} param0.label - text displayed on the button.
 * @param {boolean} param0.showArrow - flag to display an arrow next to the label.
 * @returns {JSX.Element} The `AppBarItemComponent` component.
 */
function AppBarItemComponent({
  children,
  label,
  showArrow = false,
  placement = "bottom-start",
}) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  // Function to switch the menu state
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Function to close the menu when clicking outside the component
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // Handle keyboard events to close the menu by pressing the `Tab` or `Escape` keys
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // Used to save the previous `open` state
  const prevOpen = useRef(open);

  // Effect that focuses the button after closing the menu
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // Clone the child elements to pass the menu close function to them
  const enhancedChildren = Children.map(children, (child) =>
    cloneElement(child, { handleClose })
  );

  return (
    <>
      <ButtonContainer
        ref={anchorRef}
        id='composition-button'
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        {label}
        {showArrow && (
          <span>{open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</span>
        )}
      </ButtonContainer>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement={placement}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='composition-menu'
                  aria-labelledby='composition-button'
                  onKeyDown={handleListKeyDown}
                  sx={{
                    marginTop: "1px",
                    minWidth: "200px",
                    padding: "10px",
                  }}
                >
                  {enhancedChildren}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default memo(AppBarItemComponent);

const ButtonContainer = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: `${theme.palette.text.secondary}!important`,
  minHeight: "inherit",
}));
