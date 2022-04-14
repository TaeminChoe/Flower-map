import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("imgs/main-image.jpg");
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  animation-name: appear;
  animation-duration: 3s;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const Loading = () => {
  return <Container></Container>;
};

export default Loading;
