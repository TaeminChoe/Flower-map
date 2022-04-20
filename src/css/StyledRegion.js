import styled, { css } from "styled-components";

const StyledRegion = styled.section`
  /* 공통스타일 */

  background-color: #eee;
  position: absolute;
  transition: 200ms ease-out;

  &:hover {
    background-color: tomato;
  }
`;

export { StyledRegion };
