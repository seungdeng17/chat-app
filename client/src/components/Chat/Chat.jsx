import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

let socket;

const Chat = () => {
  const { name, channel } = useParams();
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, channel }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, name, channel]);

  return <div></div>;
};

export default Chat;
