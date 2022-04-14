import styled, { css } from "styled-components";
// import flower from "../images/flower.jpg";
import flower from "../images/flower2.jpg";
// import flower from "../images/flower3.jpg";

const StyledBlur = styled.div`
  width: 75%;
  height: 95%;
  /* background-image: url(${flower}); */
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 100;
  border-radius: 10px;
  filter: blur(25px);

  ${({ query }) => {
    if (query == "pc") {
      return css`
        width: 85%;
        padding: 1rem;
      `;
    } else if (query == "tablet") {
      return css`
        padding: 1rem;
      `;
    } else if (query == "mobile") {
      return css`
        padding: 0.2rem;
      `;
    }
  }}
`;

export { StyledBlur };
