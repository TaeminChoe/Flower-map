import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  /* 공통스타일 */
  width: 90%;
  margin: 2rem;
  padding: 1rem;
  /* background-color: white; */
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;

  /* 폰트크기 */
  ${({ query }) => {
    if (query == "pc") {
      return css`
        height: 3rem;
        font-size: 5rem;
      `;
    } else if (query == "tablet") {
      return css`
        height: 3rem;
        font-size: 5rem;
      `;
    } else if (query == "mobile") {
      return css`
        height: 1rem;
        font-size: 3rem;
      `;
    }
  }}

  p {
    padding-top: 1rem;
    font-size: 1rem;
  }
`;

export { StyledHeader };
