import styled from "styled-components";

const StyledDayInfo = styled.div`
  height: 20vh;
  display: flex;
  flex-flow: column;
  font-size: 1.5rem;
  hr {
    width: 80%;
    height: 1px;
    outline: none;
    border: none;
    background-color: grey;
  }
  h2 {
    width: 100%;
    /* height: 25%; */
    padding: 0.5rem 0;
  }
`;

export { StyledDayInfo };
