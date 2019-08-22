import React from "react";
import Menutap from "./Menutap";
import Snstap from "./Snstap";
import styled from "styled-components";

const Navbar = () => {
  return (
    <BarWrapper>
      <Menutap />
      <Snstap />
    </BarWrapper>
  );
};
export default Navbar;

const BarWrapper = styled.div`
  background-color: #575757;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
