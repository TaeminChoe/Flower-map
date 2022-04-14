import styled from "styled-components";
// import flower from "../images/flower.jpg";
import flower from "../images/flower2.jpg";
// import flower from "../images/flower3.jpg";

export const StyledWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${flower});
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
