import React from "react";
import styled from "styled-components";

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
  return (
    <ChatOuter>
      <ChatInner></ChatInner>
    </ChatOuter>
  );
};

export default Channel;
