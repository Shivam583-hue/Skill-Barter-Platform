import { io } from "socket.io-client";
import { SOCKET_URL } from "./config";

const socket = io(SOCKET_URL, {
  withCredentials: true,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5,
});

socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error);
});

socket.on("connect", () => {});

export default socket;
