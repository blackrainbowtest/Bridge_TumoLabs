import { addNotification } from "features/global/GlobalSlice";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

function WebSocketNotificationComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8001/ws/notifications/");

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
