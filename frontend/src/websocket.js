import io from 'socket.io-client';

// Connect to WebSocket server
const socket = io('ws://127.0.0.1:8001/ws/notifications/');

export default socket;