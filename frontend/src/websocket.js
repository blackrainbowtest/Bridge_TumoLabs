import io from 'socket.io-client';

// Connect to WebSocket server
const socket = io('ws://localhost:8000/ws/notifications/');

export default socket;