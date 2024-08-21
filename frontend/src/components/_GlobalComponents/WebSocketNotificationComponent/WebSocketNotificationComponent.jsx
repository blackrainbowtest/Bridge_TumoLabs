import { addNotification } from "features/global/GlobalSlice";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

function WebSocketNotificationComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/notifications/");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(addNotification(data.notification));
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);

  return null;
}

export default memo(WebSocketNotificationComponent);
