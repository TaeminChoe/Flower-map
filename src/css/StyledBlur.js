import styled from "styled-components";
import flower from "../images/flower4.jpg";

const StyledBlur = styled.div`
  width: 75%;
  height: 95%;
  /* background-image: url(${flower}); */
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  z-index: 100;
  border-radius: 10px;
  filter: blur(25px);

  @media screen and (min-width: 1024px) {
    width: 85%;
    padding: 1rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0.2rem;
  }
`;

export { StyledBlur };
