import styled from "styled-components";

const StyledPageNotFound = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d39598;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-family: "Libre Bodoni", serif;
  color: white;
  h1 {
    margin: 3rem;
    font-size: 10rem;
  }
  h3 {
    font-size: 2rem;
    margin: 0.5rem;
  }
`;
function PageNotFound() {
  return (
    <StyledPageNotFound>
      <h1>✿</h1>
      <h3>Sorry</h3>
      <h3> Page Not Found</h3>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
