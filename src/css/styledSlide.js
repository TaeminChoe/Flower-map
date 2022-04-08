import styled, { css } from "styled-components";

const StyledSlide = styled.ul`
  /* 공통 스타일 */
  width: 87%;
  border-radius: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  /* border: 2px solid white; */
  background-color: rgba(255, 255, 255, 0.65);
  ${({ query }) => {
    if (query == "pc") {
      return css`
        width: 16rem;
        height: 80%;
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: none;
        padding: 1rem 2rem;
        margin-top: 1rem;
        white-space: normal;
        border-radius: 10px 0 0 10px;

        &::-webkit-scrollbar {
          width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 6px;
        }
      `;
    } else if (query == "tablet") {
      return css`
        background-color: none;
        height: 7rem;
        padding: 0.8rem 1.5rem;
        &::-webkit-scrollbar {
          display: none;
        }
      `;
    } else if (query == "mobile") {
      return css`
        background-color: none;
        height: 4rem;
        padding: 0.3rem 0.5rem;
        &::-webkit-scrollbar {
          display: none;
        }
      `;
    }
  }}
  li {
    /* 공통스타일 */
    display: inline-block;
    margin: 0.5rem;
    background-color: white;
    border-radius: 50%;
    text-align: center;
    /* 크기 */
    ${({ query }) => {
      if (query == "pc") {
        return css`
          width: 6.5rem;
          height: 6.5rem;
          line-height: 6.5rem;
        `;
      } else if (query == "tablet") {
        return css`
          width: 6rem;
          height: 6rem;
          line-height: 6rem;
        `;
      } else if (query == "mobile") {
        return css`
          width: 3.4rem;
          height: 3.4rem;
          line-height: 3.3rem;
        `;
      }
    }}
  }
`;

export { StyledSlide };
