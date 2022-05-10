import styled from "styled-components";

const StyledWeatherInfo = styled.div`
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: center;
  flex-flow: row;
  font-family: "Times New Roman", Times, serif;

  /* 오늘 기온 */
  h1 {
    width: 50%;
    font-size: 3.6rem;
    padding-right: 1.2rem;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    color: #b9aca2;
  }

  /* 오늘 기온 디테일 */
  .div-wrap {
    width: 33%;
    text-align: left;
    color: #cec0b4;
    font-size: 1.2rem;
    hr {
      width: 100%;
      height: 2px;
      outline: none;
      border: none;
      background-color: #dfd5cd;
      margin: 0.3rem auto;
    }
    .ui-wrap {
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      font-size: 0.75rem;
      ul {
        width: 50%;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    width: 80%;
    h1 {
      font-size: 5.5rem;
    }
    margin: 0 auto;
    .div-wrap {
      font-size: 1.7rem;
      margin-top: 0.5rem;
      hr {
        margin: 0.6rem auto;
      }
      .ui-wrap {
        font-size: 1rem;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    h1 {
      font-size: 5.5rem;
    }
    .div-wrap {
      font-size: 2rem;
      .ui-wrap {
        font-size: 1.3rem;
      }
    }
  }
`;
export { StyledWeatherInfo };
