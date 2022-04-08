import styled, { css } from "styled-components";

const StyledBlur = styled.div`
  width: 90%;
  height: 95%;
  background-image: url("https://i.pinimg.com/564x/cf/ed/8c/cfed8cd8fd96193721db8c38c565457e.jpg");

  position: absolute;
  z-index: 100;
  border-radius: 10px;
  filter: blur(20px);

  ${({ query }) => {
    if (query == "pc") {
      return css`
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
