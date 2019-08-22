import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadContainer>
      <Svg>
        <Circle cx="170" cy="170" r="160" stroke="#E2007C"></Circle>
        <Circle cx="170" cy="170" r="160" stroke="#E2007C"></Circle>
        <Circle cx="170" cy="170" r="160" stroke="#E2007C"></Circle>
        <Circle cx="170" cy="170" r="160" stroke="#E2007C"></Circle>
      </Svg>
    </LoadContainer>
  );
};

export default Loading;
const xfade = keyframes`
  50% {
    transform: rotate(360deg);
  }
`;

const LoadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ededed;
`;
const Svg = styled.svg`
  max-width: 15rem;
  width: 100%;
  height: auto;
  stroke-linecap: round;
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: 3.5;
    animation: ${xfade} 3s 0s infinite;
  //   animation-name: preloader;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: 170px 170px;
  will-change: transform;
  &:nth-of-type(1) {
    stroke-dasharray: 550px;
  }

  &:nth-of-type(2) {
    stroke-dasharray: 500px;
  }

  &:nth-of-type(3) {
    stroke-dasharray: 450px;
  }

  &:nth-of-type(4) {
    stroke-dasharray: 300px;
  }

  @for $i from 1 through 4 {
    &:nth-of-type(#{$i}) {
        animation-delay: -#{$i * 0.15}s;
`;
