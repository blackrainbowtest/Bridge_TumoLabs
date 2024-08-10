import { memo, useEffect, useRef, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeError, removeNotification } from "features/global/GlobalSlice";

function NotificationManagerComponent() {
  const [snackbars, setSnackbars] = useState([]);
  const errors = useSelector((state) => state?.global?.errors);
  const notifications = useSelector((state) => state?.global?.notifications);
  const dispatch = useDispatch();
  const snackbarRefs = useRef([]);

  useEffect(() => {
    // Combine errors and notifications with time stamps
    const allMessages = [
      ...errors.map((error) => ({ ...error, type: "error" })),
      ...notifications.map((notification) => ({
        ...notification,
        type: "success",
      })),
    ];

    // Sort messages by their timestamp
    const sortedMessages = allMessages.sort(
      (a, b) => a.timestamp - b.timestamp
    );
    setSnackbars(sortedMessages);
  }, [errors, notifications]);

  const handleClose = (key) => (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    // Remove snackbar from state
    setSnackbars((prev) =>
      prev.filter((snackbar) => snackbar.timestamp !== key.timestamp)
    );

    // Remove snackbar from Redux state
    if (key.type === "error") {
      dispatch(removeError(key.timestamp));
    } else if (key.type === "success") {
      dispatch(removeNotification(key.timestamp));
    }
  };

  useEffect(() => {
    // Measure heights of snackbars
    snackbarRefs.current = snackbarRefs.current.slice(0, snackbars.length);
    snackbars.forEach((_, index) => {
      if (snackbarRefs.current[index]) {
        const height = snackbarRefs.current[index].clientHeight;
        snackbarRefs.current[index].style.bottom = `${
          10 + index * (height + 10)
        }px`;
      }
    });
  }, [snackbars]);

  return snackbars.map((snackbar, index) => (
    <Snackbar
      key={`${snackbar.timestamp}-${index}`}
      open={true}
      autoHideDuration={4000}
      onClose={handleClose(snackbar)}
      ref={(el) => (snackbarRefs.current[index] = el)}
      style={{
        position: "fixed",
        right: "10px",
        width: "auto",
        maxWidth: "300px",
        zIndex: 1300,
      }}
    >
      <Alert
        onClose={handleClose(snackbar)}
        severity={snackbar.type}
        sx={{ width: "100%" }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  ));
}

export default memo(NotificationManagerComponent);
