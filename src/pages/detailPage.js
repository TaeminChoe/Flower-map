import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { WiDaySunnyOvercast } from "weather-icons-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StyledWrap } from "../css/StyledWrap";
import { StyledBlur } from "../css/StyledBlur";
import { StyledMain } from "../css/StyledMain";
import { StyledHeader } from "../css/StyledHeader";

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
`;

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
    font-size: 16rem;
    color: navy;
  }
`;

const StyledWeatherInfo = styled.div`
  width: 90%;
  height: 10vh;
  padding: 1rem 0;
  display: flex;
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

const StyledDayInfo = styled.div`
  width: 90%;
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
function DetailPage() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const query = useRef();

  if (isPc) {
    query.current = "pc";
  } else if (isTablet) {
    query.current = "tablet";
  } else if (isMobile) {
    query.current = "mobile";
  }

  return (
    <>
      <StyledWrap>
        <StyledBlur />
        <StyledMain>
          <StyledDetailArea>
            <StyledHeader>MAP</StyledHeader>
            <StyledDetailContent></StyledDetailContent>
          </StyledDetailArea>
        </StyledMain>
      </StyledWrap>
      <StyledWrap>
        <StyledBlur />
        <StyledMain>
          <StyledDetailArea>
            <StyledHeader>WEATHER</StyledHeader>
            <StyledDetailContent>
              <WiDaySunnyOvercast className="weather-icon" />
              <StyledWeatherInfo>
                <h1>25°</h1>
                <div className="div-wrap">
                  <h3>Details</h3>
                  <hr />
                  <div className="ui-wrap">
                    <ul>
                      <li>
                        <h4>FEELS</h4>
                      </li>
                      <li>
                        <h4>WIND</h4>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <h4>23°</h4>
                      </li>
                      <li>
                        <h4>47.2km/s</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </StyledWeatherInfo>
              <StyledDayInfo>
                <hr />
                <h2>Monday</h2>
                <hr />
                <h2>Morning</h2>
              </StyledDayInfo>
            </StyledDetailContent>
          </StyledDetailArea>
        </StyledMain>
      </StyledWrap>
    </>
  );
}

export default DetailPage;
