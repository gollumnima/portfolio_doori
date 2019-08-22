import React from "react";
import styled from "styled-components";
import IconMargin from "../Styles/Bar_style/IconWrapper";
import { Link } from "react-router-dom";

const Menutap = () => {
  return (
    <IconWrapper>
      <IconMargin>
        <Link to="Main">
          <i className="home large icon" />
        </Link>
      </IconMargin>
      <IconMargin>
        <i className="user outline large icon" />
      </IconMargin>
      <IconMargin>
        <i className="mail outline large icon" />
      </IconMargin>
    </IconWrapper>
  );
};

export default Menutap;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
