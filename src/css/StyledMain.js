import styled from "styled-components";

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
  @media screen and (min-width: 1024px) {
    flex-flow: row;
    padding: 1rem;
    min-width: 100rem;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0.2rem;
  }
`;

export { StyledMain };
