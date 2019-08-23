import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <InputContainer>
      <NameMail>
        <InputArea1></InputArea1>
        <InputArea1></InputArea1>
      </NameMail>
      <InputArea2></InputArea2>
      <TextArea></TextArea>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
`;

const InputArea1 = styled.input`
  background-color: #575757;
  color: white;
  border: none;
  width: 120px;
  margin: 5px;
`;

const InputArea2 = styled.input`
  background-color: #575757;
  color: white;
  border: none;
  width: 250px;
  margin: 5px;
`;

const TextArea = styled.textarea`
  background-color: #575757;
  color: white;
  border: none;
  width: 17.8rem;
  height: 8rem;
  margin: 5px;
`;

const NameMail = styled.div`
  display: flex;
`;

export default Input;
