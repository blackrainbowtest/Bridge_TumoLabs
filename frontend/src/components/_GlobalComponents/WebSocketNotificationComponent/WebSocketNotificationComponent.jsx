import { getNotifications } from "features/notifications/notificationAPI";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function WebSocketComponent() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state?.account?.isAuthenticated
  );

  useEffect(() => {
    // const socket = new WebSocket("ws://127.0.0.1:8001/ws/notifications/");
    isAuthenticated && dispatch(getNotifications());

    // socket.onopen = function (event) {
    //   console.log("WebSocket is connected.");
    // };

    // socket.onmessage = function (event) {
    //   console.log("Message from server:", event.data);
    // };

    // socket.onerror = function (error) {
    //   console.log("WebSocket Error:", error);
    // };

    // socket.onclose = function (event) {
    //   console.log("WebSocket is closed now.");
    // };

    // Clean up on component unmount
    return () => {
      // socket.close();
    };
  }, [dispatch, isAuthenticated]);

  return null;
}

export default WebSocketComponent;
