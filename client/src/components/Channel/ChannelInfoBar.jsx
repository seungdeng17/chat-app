import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChannelInfoBarWrap = styled.div`
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
  background-color: #ecf0f1;
  font-size: 16px;
  font-weight: 600;
  .infoBar-item {
    padding: 0 20px;
  }
  a {
    text-decoration: none;
    font-size: 15px;
  }
`;

const ChannelInfoBar = () => {
  return (
    <ChannelInfoBarWrap>
      <div className="infoBar-item">채널 목록</div>
      <Link className="infoBar-item" to="/">
        ❌
      </Link>
    </ChannelInfoBarWrap>
  );
};

export default ChannelInfoBar;
