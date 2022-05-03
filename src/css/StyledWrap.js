import styled from "styled-components";
import flower from "../images/flower4.jpg";

export const StyledWrap = styled.div`
  width: 100%;
  height: 200vh;
  background-image: url(${flower});
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  @media screen and (min-width: 1024px) {
    height: 100vh;
  }
`;
