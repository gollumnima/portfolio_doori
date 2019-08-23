import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import styled from "react-styled-component";
const Aboutme = () => {
  return (
    <>
      <NavWrap>
        <Navbar />
      </NavWrap>
      <AboutWrapper>
        <IntroduceWrap>
          <Metitle>
            <Mespans></Mespans>
          </Metitle>
          <Mepara></Mepara>
        </IntroduceWrap>
        <PortWrapper>
          <Portli></Portli>
        </PortWrapper>
      </AboutWrapper>
    </>
  );
};

export default Aboutme;

const NavWrap = styled.div`
  position: fixed;
  width: 54px;
`;
const AboutWrapper = styled.div``;

const PortWrapper = styled.div``;

const IntroduceWrap = styled.div``;

const Metitle = styled.div``;

const Mespans = styled.span``;

const Mepara = styled.p``;

const Portli = styled.li``;
