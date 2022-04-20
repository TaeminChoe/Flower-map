import styled, { css } from "styled-components";

const StyledRegion = styled.div`
  /* 공통스타일 */
  position: absolute;
  background-color: #eee;
  transition: 200ms ease-out;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  &:hover {
    background-color: tomato;
  }
`;

export { StyledRegion };
