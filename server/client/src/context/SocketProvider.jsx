import React, { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

// wobsocket // web rtc // socket io

export const SocketProvider = ({ children }) => {
  const socket = useMemo(
    () =>
      io("https://videochatpoc.onrender.com", {
        path: "/socket",
        transports: ["websocket", "polling"],
        reconnection: true,
        reconnectionAttempts: 5,
      }),
    []
  );

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
