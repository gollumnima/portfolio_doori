import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styled from "styled-components";
import Btn from "../../Components/Styles/Buttons/Btn";

const Main = () => {
  return (
    <>
      <NavWrap>
        <Navbar />
      </NavWrap>
      <PageWrapper>
        <MainWrapper>
          <TextWrapper>
            <Hip>Hi,</Hip>
            <Hip>I'm Dr.K</Hip>
            <Hip>who treat the sick code.</Hip>
            <Small>Front End Developer / React / Html / Javascript</Small>
          </TextWrapper>
          <BtnWrapper>
            <Btn>Contact Me</Btn>
          </BtnWrapper>
        </MainWrapper>
      </PageWrapper>
    </>
  );
};

export default Main;

const NavWrap = styled.div`
  position: fixed;
  width: 54px;
`;

const PageWrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  background-color: #f4f3f3;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
`;

const TextWrapper = styled.div`
  margin-left: 5%;
  margin-top: 15%;
`;

const Hip = styled.p`
  color: #a4bcc4;
  font-size: 5rem;
  font-weight: bold;
  margin: 0%;
  line-height: 95%;
`;

const Small = styled.p`
  color: #8f9294;
  font-size: 2.5rem;
`;

const BtnWrapper = styled.div`
  margin-top: 2%;
  margin-left: 5%;
`;
