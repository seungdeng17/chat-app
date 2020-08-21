import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import UserList from "./UserList";

const ChatInfoBarWrap = styled.div`
  position: relative;
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
  font-size: 16px;
  font-weight: 600;
  .infoBar-item {
    padding: 0 20px;
  }
  a {
    text-decoration: none;
    font-size: 15px;
  }
  .userList {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 500;
    color: #34495e;
    vertical-align: middle;
    cursor: pointer;
  }
`;

const ChatInfoBar = ({ channel, users, name }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(!isOpen);

  return (
    <ChatInfoBarWrap>
      <div className="infoBar-item">
        <span>{channel}</span>
        <span onClick={handleClick} className="userList">
          참가자 정보
        </span>
      </div>
      <Link className="infoBar-item" to={`/channel/${name}`}>
        ❌
      </Link>
      {isOpen && <UserList {...{ users, name, isOpen, setOpen }} />}
    </ChatInfoBarWrap>
  );
};

export default ChatInfoBar;
