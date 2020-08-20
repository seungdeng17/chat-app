import React from "react";
import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

const MessageListWrap = styled.div`
  width: 100%;
  height: 570px;
  background-color: #c7ecee;
  box-sizing: border-box;
  .messages {
    width: 100%;
    height: 100%;
    overflow: auto;
    flex: auto;
    > {
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

const MessageList = ({ name, messages }) => {
  return (
    <MessageListWrap>
      <ScrollToBottom className="messages">
        {messages.map((message, i) => (
          <div key={i}>
            <Message {...{ message, name }} />
          </div>
        ))}
      </ScrollToBottom>
    </MessageListWrap>
  );
};

export default MessageList;
