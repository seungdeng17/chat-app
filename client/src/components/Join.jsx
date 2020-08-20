import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const JoinWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const JoinForm = styled.form`
  width: 400px;
  height: 700px;
  border: 1px solid #000;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  margin-bottom: 20px;
  text-indent: 10px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 250px;
  height: 40px;
  box-sizing: border-box;
`;

const Join = () => {
  const history = useHistory();
  const { handleSubmit, register } = useForm();
  const onSubmit = ({ name, channel }) => {
    history.push(`/chat/${name}/${channel}`);
  };

  return (
    <JoinWrap onSubmit={handleSubmit(onSubmit)}>
      <JoinForm>
        <Title>Chat App</Title>
        <Input type="text" placeholder="Name" name="name" ref={register} />
        <Input type="text" placeholder="Channel" name="channel" ref={register} />
        <Button type="submit">Join</Button>
      </JoinForm>
    </JoinWrap>
  );
};

export default Join;
