import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChatInfoBarWrap = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #95afc0;
  box-sizing: border-box;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #7ed6df;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  > * {
    margin: 0 20px;
  }
  a {
    text-decoration: none;
    font-size: 15px;
  }
`;

const ChatInfoBar = ({ channel }) => {
  return (
    <ChatInfoBarWrap>
      <span>{channel}</span>
      <Link to="/">❌</Link>
    </ChatInfoBarWrap>
  );
};

export default ChatInfoBar;
