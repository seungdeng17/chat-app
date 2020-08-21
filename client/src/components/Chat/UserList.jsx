import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import onlineIcon from "@assets/images/onlineIcon.png";

const UserListWrap = styled.div`
  position: absolute;
  z-index: 10;
  top: 50px;
  right: 0;
  width: 0;
  height: 570px;
  background-color: #fff;
  border-left: 1px solid #95afc0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  animation-name: userListAnim;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  overflow: hidden;
  @keyframes userListAnim {
    0% {
      width: 0;
    }
    100% {
      width: 40%;
    }
  }
`;

const UserName = styled.p`
  width: 140px;
  height: 40px;
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-right: 8px;
    width: 6px;
    height: 6px;
  }
  span {
    margin-left: 6px;
    font-size: 12px;
    font-weight: 500;
  }
`;

const UserList = ({ users, name, isOpen, setOpen }) => {
  const userListEl = useRef();

  const handleClickOutside = ({ target }) => {
    console.log(target);
    if (isOpen && !userListEl.current.contains(target)) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <UserListWrap ref={userListEl}>
      {users.map((user, i) => (
        <UserName key={i}>
          <img src={onlineIcon} alt="onlineIcon" /> {user.name}
          {user.name === name && <span>(나)</span>}
        </UserName>
      ))}
    </UserListWrap>
  );
};

export default UserList;
