import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";

const ChannelListWrap = styled.div`
  width: 100%;
  height: 650px;
  background-color: #fff;
  box-sizing: border-box;
  .channels {
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

const ChannelDataWrap = styled.div`
  width: 100%;
  height: 60px;
  a {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: #2d3436;
    .channel-box-item {
      margin: 0 15px;
    }
  }
  border-bottom: 1px solid #95afc0;
  :hover {
    background-color: #dff9fb;
  }
`;

const ChannelList = ({ channelData, name }) => {
  return (
    <ChannelListWrap>
      <ScrollToBottom className="channels">
        {channelData.map(([channelName, length], i) => {
          return (
            <ChannelDataWrap key={i}>
              <Link to={`/chat/${name}/${channelName}`}>
                <div className="channel-box-item">{channelName}</div>
                <div className="channel-box-item">{length}명</div>
              </Link>
            </ChannelDataWrap>
          );
        })}
      </ScrollToBottom>
    </ChannelListWrap>
  );
};

export default ChannelList;
