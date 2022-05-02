import styled from "styled-components";

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
  @media screen and (min-width: 1024px) {
    width: 45%;
    height: 80%;
    padding: 1rem 2rem;
    margin-top: 1rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 75vh;
    padding: 0.3rem 1.5rem;
    margin-top: 4.8rem;
  }
  @media screen and (max-width: 767px) {
    height: 75vh;
    padding: 0.3rem 0.5rem;
    margin: 1rem 0;
  }
`;

export { StyledMapArea };
