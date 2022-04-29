import styled from "styled-components";

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
  font-family: "Libre Bodoni", serif;
  h3 {
    font-size: 3.5rem;
  }
  p {
    padding-top: 1rem;
    font-size: 2rem;
  }
  /* 폰트크기 */
  @media screen and (min-width: 1024px) {
    width: 40%;
    height: 3rem;
    font-size: 5rem;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 3rem;
    font-size: 5rem;
  }
  @media screen and (max-width: 767px) {
    height: 1rem;
    padding: 1rem 0rem;
    font-size: 2.5rem;
    h3 {
      font-size: 2rem;
    }
    p {
      padding-top: 1rem;
      font-size: 1rem;
    }
  }
`;

export { StyledHeader };
