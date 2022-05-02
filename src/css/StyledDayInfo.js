import styled from "styled-components";

const StyledDayInfo = styled.div`
  height: 17vh;
  display: flex;
  flex-flow: column;
  font-size: 2rem;
  font-family: "Times New Roman", Times, serif;
  hr {
    width: 89%;
    height: 2px;
    outline: none;
    border: none;
    margin: 0 auto;
    background-color: #dfd5cd;
  }
  h2 {
    color: #b9aca2;
    width: 100%;
    /* height: 25%; */
    padding: 0.5rem 0;
  }
  @media screen and (min-width: 1024px) {
    width: 75%;
    height: 20vh;
    margin: 0 auto;
    font-size: 2.5rem;
    h2 {
      margin: 1rem 0;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 23vh;
    font-size: 3rem;
    h2 {
      margin: 2rem 0;
    }
  }
`;

export { StyledDayInfo };
