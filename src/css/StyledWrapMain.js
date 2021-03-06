import styled from "styled-components";
import flower from "../images/flower4.jpg";

export const StyledWrapMain = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${flower});
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 130vh;
  }
`;
