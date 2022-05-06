import styled from "styled-components";

const StyledDetailArea = styled.section`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem 0;
  border-radius: 10px;
  @media screen and (min-width: 1024px) {
    padding: 2rem 0;
    width: 45%;
    margin: 1rem;
  }
`;

export { StyledDetailArea };
