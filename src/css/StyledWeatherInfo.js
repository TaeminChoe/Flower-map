import styled from "styled-components";

const StyledWeatherInfo = styled.div`
  width: 100%;
  height: 10vh;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  flex-flow: row;
  /* background-color: white; */

  /* 오늘 기온 */
  h1 {
    width: 50%;
    font-size: 4.5rem;
  }

  /* 오늘 기온 디테일 */
  .div-wrap {
    width: 40%;
    text-align: left;
    color: grey;
    margin-top: 0.8rem;
    font-size: 1rem;
    hr {
      width: 100%;
      height: 1px;
      outline: none;
      border: none;
      background-color: grey;
    }
    .ui-wrap {
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
      ul {
        width: 50%;
      }
    }
  }
`;

export { StyledWeatherInfo };
