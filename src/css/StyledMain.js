import styled, { css } from "styled-components";

const StyledMain = styled.main`
  /* 공통 스타일 */
  width: 90%;
  height: 95%;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  z-index: 200;

  /* 색상 */
  ${({ query }) => {
    if (query == "pc") {
      return css`
        flex-flow: row;
        padding: 1rem;
        min-width: 100rem;
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

export { StyledMain };
