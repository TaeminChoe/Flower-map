import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { WiDaySunnyOvercast, WiCloudyGusts } from "weather-icons-react";

import { getWeather } from "../utils/api";
import { useQuery } from "react-query";

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
  const { isLoading, isError, data, error } = useQuery("weather", getWeather, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e.message);
    },
  });

  useEffect(() => {
    // getWeather(33.3869, 126.5652, 1);
  }, []);

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
