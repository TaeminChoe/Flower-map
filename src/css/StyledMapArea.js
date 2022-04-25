import styled, { css } from "styled-components";

const StyledMapArea = styled.section`
  /* 공통스타일 */
  width: 87%;
  background-color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  text-align: center;
  background-color: rgba(250, 255, 255, 0);
  /* 크기 */
  ${({ query }) => {
    if (query == "pc") {
      return css`
        width: 45%;
        height: 80%;
        padding: 1rem 2rem;
        margin-top: 1rem;
      `;
    } else if (query == "tablet") {
      return css`
        height: 75vh;
        padding: 0.3rem 1.5rem;
        margin-top: 1.8rem;
      `;
    } else if (query == "mobile") {
      return css`
        height: 75vh;
        padding: 0.3rem 0.5rem;
        margin: 1rem 0;
      `;
    }
  }}
`;

export { StyledMapArea };
