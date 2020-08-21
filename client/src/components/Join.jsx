import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const JoinWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2f3640;
`;

const JoinForm = styled.form`
  width: 400px;
  height: 700px;
  border: 1px solid #535c68;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fed330;
`;

const Title = styled.div`
  width: 200px;
  height: 200px;
  font-size: 50px;
  margin-bottom: 25px;
  background-color: #3b1e1e;
  color: #fed330;
  border-radius: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    width: 165px;
  }
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  margin-bottom: 20px;
  text-indent: 10px;
  box-sizing: border-box;
  outline: none;
`;

const Button = styled.button`
  width: 250px;
  height: 40px;
  box-sizing: border-box;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0;
  }
`;

const Join = () => {
  const history = useHistory();
  const [inputName, setInputName] = useState("");
  const { handleSubmit, register } = useForm();

  const onSubmit = ({ name, channel }) => {
    if (!name || !channel) return alert("이름과 채널을 입력하세요.");
    setInputName(name);
    history.push(`/chat/${name}/${channel}`);
  };

  const handleChange = ({ target: { value } }) => setInputName(value);

  const handleClick = () => {
    if (!inputName) return alert("이름을 입력하세요.");
    history.push(`/channel/${inputName}`);
  };

  return (
    <JoinWrap onSubmit={handleSubmit(onSubmit)}>
      <JoinForm>
        <Title>
          <h1>Taekao Talk</h1>
        </Title>
        <Input type="text" placeholder="이름" name="name" ref={register} value={inputName} onChange={handleChange} />
        <Input type="text" placeholder="채널" name="channel" ref={register} />
        <Button type="submit">대화방 참여 / 만들기</Button>
        <Button type="button" onClick={handleClick}>
          채널 목록
        </Button>
      </JoinForm>
    </JoinWrap>
  );
};

export default Join;
