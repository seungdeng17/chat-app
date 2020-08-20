import React from "react";
import styled from "styled-components";

const ChatInputWrap = styled.form`
  width: 100%;
  height: 80px;
  border-top: 1px solid #95afc0;
  box-sizing: border-box;
  line-height: 80px;
  display: flex;
  input,
  button {
    height: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0;
  }
  input {
    text-indent: 20px;
    width: 80%;
    border-bottom-left-radius: 4px;
  }
  button {
    width: 20%;
    border-bottom-right-radius: 4px;
  }
`;

const ChatInput = ({ message, setMessage, sendMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handleChange = ({ target: { value } }) => setMessage(value);

  return (
    <ChatInputWrap onSubmit={handleSubmit}>
      <input type="text" placeholder="메세지를 입력하세요." value={message} onChange={handleChange} />
      <button type="submit">전 송</button>
    </ChatInputWrap>
  );
};

export default ChatInput;
