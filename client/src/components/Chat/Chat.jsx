import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import io from "socket.io-client";

import ChatInfoBar from "./ChatInfoBar";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

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

let socket;

const Chat = () => {
  const history = useHistory();
  const { name, channel } = useParams();
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = process.env.REACT_APP_ENDPOINT;

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, channel }, (error) => {
      if (error) {
        alert(error);
        history.push("/");
      }
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("channelData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnecting", { channel });
      socket.off();
    };
  }, [ENDPOINT, name, channel, history]);

  const sendMessage = () => {
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <ChatOuter>
      <ChatInner>
        <ChatInfoBar {...{ channel, users, name }} />
        <MessageList {...{ name, messages }} />
        <ChatInput {...{ message, setMessage, sendMessage }} />
      </ChatInner>
    </ChatOuter>
  );
};

export default Chat;
