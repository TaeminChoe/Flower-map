import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { WiDaySunnyOvercast, WiCloudyGusts } from "weather-icons-react";
// import { useQuery } from "react-query";
//css
import { StyledWeatherInfo } from "../css/StyledWeatherInfo";
import { StyledDayInfo } from "../css/StyledDayInfo";
//util
import { getWeather } from "../utils/api";
import { REGION_LIST } from "../utils/regionData";

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
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }
`;

function SlideWeather() {
  const location = useLocation();
  const [region, setRegion] = useState();
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
  console.log("test");
  // const { isLoading, isError, data, error } = useQuery(
  //   "weather",
  //   getWeather(region.lat, region.lng),
  //   {
  //     onSuccess: (data) => {
  //       console.log("query weather :: ", data);
  //     },
  //     onError: (e) => {
  //       console.log("query error:: ", e.message);
  //     },
  //   }
  // );

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    setRegion(REGION_LIST.find((region) => region.id === Number(id)));
  }, []);

  if (region) {
    getWeather(region.lat, region.lng);
  }

  return (
    <StyledSlick {...settings}>
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
