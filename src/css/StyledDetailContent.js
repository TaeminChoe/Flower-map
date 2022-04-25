import styled, { css } from "styled-components";

const StyledDetailContent = styled.article`
  width: 85%;
  height: 70vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  .weather-icon {
    font-size: 14rem;
  }
`;

export { StyledDetailContent };
