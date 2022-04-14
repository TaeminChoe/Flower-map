import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  /* 공통스타일 */
  width: 90%;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

  /* 폰트크기 */
  ${({ query }) => {
    if (query == "pc") {
      return css`
        width: 40%;
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
        padding: 1rem 0rem;
        margin: 1rem 0rem;
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
