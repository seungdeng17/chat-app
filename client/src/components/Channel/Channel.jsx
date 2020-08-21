import React, { useEffect } from "react";
import io from "socket.io-client";
import styled from "styled-components";

let socket;

const ChatOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2f3640;
`;

const ChatInner = styled.div`
  width: 400px;
  height: 700px;
  border: 1px solid #95afc0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Channel = () => {
  const ENDPOINT = process.env.REACT_APP_ENDPOINT;

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("channel");

    socket.on("channelList", (data) => {
      console.log(data);
    });
  });

  return (
    <ChatOuter>
      <ChatInner></ChatInner>
    </ChatOuter>
  );
};

export default Channel;
