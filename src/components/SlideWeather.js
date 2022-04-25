import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from "styled-components";
import { WiDaySunnyOvercast, WiCloudyGusts } from "weather-icons-react";

import { StyledWeatherInfo } from "../css/StyledWeatherInfo";
import { StyledDayInfo } from "../css/StyledDayInfo";

const StyledSlick = styled(Slider)`
  /* 공통스타일 */
  width: 100%;
  text-align: center;
  /* 슬라이드 아래 점 */
  .slick-dots {
    .slick-active {
      button::before {
        color: white;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
  /* 슬라이드 <> 버튼 */
  .slick-prev:before,
  .slick-next:before {
    font-size: 3rem;
  }

  /* 슬라이드 폰트 크기, <> 버튼 설정 */
  ${({ query }) => {
    if (query == "pc") {
      return css`
        font-size: 3rem;
      `;
    } else if (query == "tablet") {
      return css`
        font-size: 3rem;
        .slick-prev:before,
        .slick-next:before {
          display: none;
        }
      `;
    } else if (query == "mobile") {
      return css`
        font-size: 1.6rem;
        .slick-prev:before,
        .slick-next:before {
          display: none;
        }
      `;
    }
  }}
`;

function SlideWeather({ query }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlick query={query} {...settings}>
      <div>
        <WiDaySunnyOvercast
          className="weather-icon"
          style={{ color: "gold" }}
        />
        <StyledWeatherInfo>
          <h1>28°</h1>
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
                  <h4>27°</h4>
                </li>
                <li>
                  <h4>30.2km/s</h4>
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
      </div>
      <div>
        <WiCloudyGusts className="weather-icon" style={{ color: "navy" }} />
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
          <h2>Tuesday</h2>
          <hr />
          <h2>Morning</h2>
        </StyledDayInfo>
      </div>
    </StyledSlick>
  );
}
export default SlideWeather;
