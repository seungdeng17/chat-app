import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import styled from "styled-components";

import ChannelInfoBar from "./ChannelInfoBar";
import ChannelList from "./ChannelList";

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
  const { name } = useParams();
  const [channelData, setChannelData] = useState([]);

  const ENDPOINT = process.env.REACT_APP_ENDPOINT;

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("channel");

    socket.on("channelList", (data) => {
      setChannelData(data);
    });

    return () => {
      socket.off();
    };
  }, [ENDPOINT]);

  return (
    <ChatOuter>
      <ChatInner>
        <ChannelInfoBar />
        <ChannelList {...{ channelData, name }} />
      </ChatInner>
    </ChatOuter>
  );
};

export default Channel;
