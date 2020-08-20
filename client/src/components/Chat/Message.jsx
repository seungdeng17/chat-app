import React from "react";
import styled from "styled-components";

const AdminMessage = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #535c68;
  font-size: 14px;
`;

const MyMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 13px;
  margin: 10px 20px;
  .text {
    background: #fed330;
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
    padding: 10px 15px;
    border-radius: 5px;
  }
`;

const AnotherMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  font-size: 13px;
  margin: 10px 20px;
  .user {
    margin-right: 10px;
  }
  .text {
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
    padding: 10px 15px;
    border-radius: 5px;
  }
`;

const Message = ({ message, name }) => {
  const { user, text } = message;

  if (user === "Admin") return <AdminMessage>{text}</AdminMessage>;

  let isSentByCurrentUser = false;

  if (user === name) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <MyMessage>
      <span className="text">{text}</span>
    </MyMessage>
  ) : (
    <AnotherMessage>
      <span className="user">{user}</span>
      <span className="text">{text}</span>
    </AnotherMessage>
  );
};

export default Message;
