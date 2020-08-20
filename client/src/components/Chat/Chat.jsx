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
`;

const ChatInner = styled.form`
  width: 400px;
  height: 700px;
  border: 1px solid #000;
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
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, channel }, (error) => {
      if (error) {
        alert(error);
        history.push("/");
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, name, channel, history]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <ChatOuter>
      <ChatInner>
        <ChatInfoBar />
        <MessageList />
        <ChatInput />
      </ChatInner>
    </ChatOuter>
  );
};

export default Chat;