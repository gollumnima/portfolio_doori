import React from "react";
import styled from "styled-components";
import Gmap from "../Components/Map/Gmap";
import Navbar from "../Components/Navbar/Navbar";
import Btn from "../Components/Styles/Buttons/Btn";

const Contactme = () => {
  return (
    <>
      <NavWrap>
        <Navbar />
      </NavWrap>
      <ContactWrap>
        <ContentWrapper>
          <SpansWrapper>
            <SpanArea>D</SpanArea>
            <SpanArea>O</SpanArea>
            <SpanArea>O</SpanArea>
            <SpanArea>R</SpanArea>
            <SpanArea>I</SpanArea>
          </SpansWrapper>
          <PArea>
            If you have any questions, PDH :) <br></br> Please Don't hestate to
            contact me! doori.alice.kim@gmail.com
          </PArea>
          <BtmWrapper>
            <Btn>Get Happy</Btn>
          </BtmWrapper>
        </ContentWrapper>
        <MapWrapper>
          <Gmap />
        </MapWrapper>
      </ContactWrap>
    </>
  );
};

export default Contactme;

const MapWrapper = styled.div`
  margin-left: 21rem;
  margin-top: 1.5rem;
`;

const NavWrap = styled.div`
  position: fixed;
  width: 54px;
`;

const ContactWrap = styled.div`
  background-color: #f4f3f3;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  margin-left: 3%;
`;

const SpansWrapper = styled.div`
  margin-top: 16rem;
`;

const SpanArea = styled.span`
  font-size: 7rem;
  color: #a4bcc4;
`;

const ContentWrapper = styled.div`
  margin-top: 1.5rem;
  margin-left: 5%;
`;

const PArea = styled.p`
  font-size: 1.2rem;
  color: #575757;
  margin-left: 1rem;
  margin-top: 1rem;
`;

const BtmWrapper = styled.div`
  margin-left: 1rem;
`;
