import React from "react";
import styled from "styled-components";
import IconMargin from "../Styles/Bar_style/IconWrapper";

const Snstap = () => {
  return (
    <SnsWrapper>
      <IconMargin>
        {/* <AL> */}
        <i className="linkedin large icon" />
        {/* </AL> */}
      </IconMargin>
      <IconMargin>
        <i className="github large icon" />
      </IconMargin>
      <IconMargin>
        <IL>
          <i className="instagram large icon" />
        </IL>
      </IconMargin>
    </SnsWrapper>
  );
};

export default Snstap;

const SnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// const AL = styled.a``;

const IL = styled.a`
href="https://www.instagram.com/dooreplay/" target="_blank"`;
