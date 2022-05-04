import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiSnowflakeCold,
  WiLightning,
  WiRaindrops,
} from "../utils/icons";
import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
//css
import { StyledWeatherInfo } from "../css/StyledWeatherInfo";
import { StyledDayInfo } from "../css/StyledDayInfo";
//recoil
import { regionState } from "../atom";
//util
import { WEATHER_LIST } from "../utils/weatherData";
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
  .slick-dots button::before {
    color: #a5a5a5;
  }
  /* 슬라이드 폰트 크기, <> 버튼 설정 */
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
    .weather-icon {
      font-size: 17rem;
    }
    .slick-prev {
      left: -12px;
      z-index: 9999;
    }
    .slick-prev:before {
      left: -10px;
      z-index: 9999;
    }
    .slick-next {
      right: 17px;
    }
    .slick-next:before {
      right: -25px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 3rem;
    .weather-icon {
      font-size: 20rem;
    }
    .slick-prev {
      left: -12px;
    }
    .slick-next {
      right: 17px;
    }
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
  const [region, setRegion] = useRecoilState(regionState);
  const [dailyWeatherData, setDailyWeatherData] = useState();
  /* key url for openWeatherAPI */
  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const ONE_CALL = "https://api.openweathermap.org/data/2.5/onecall";
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

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    if (!region) {
      setRegion(REGION_LIST.find((region) => region.id === Number(id)));
    }
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      `${ONE_CALL}?lat=${region.lat}&lon=${region.lng}&exlude=current&appid=${API_KEY}&units=metric`
    );
    return data;
  };

  useQuery(`${region ? region.name : "ready"}_weather`, getData, {
    onSuccess: (data) => {
      parseWeatherObj(data.daily);
    },
    onError: (e) => {
      console.log("weather error:: ", e.message);
    },
    enabled: !!region,
  });

  /* weather obj parse from openWeatherAPI */
  const parseWeatherObj = (weatherObj) => {
    if (!weatherObj) {
      setDailyWeatherData(WEATHER_LIST);
    } else {
      const dailyWeathers = weatherObj.map((daily, index) => {
        return {
          day: index,
          weather: daily.weather[0].main,
          temp: daily.temp.day,
          feels: daily.feels_like.day,
          wind: daily.wind_speed,
        };
      });
      setDailyWeatherData(dailyWeathers);
    }
  };

  /* weather icon style obj */
  const iconStyle = {
    Clear: <WiDaySunny className="weather-icon" style={{ color: "#f3d94f" }} />,
    Clouds: (
      <WiCloudy
        className="weather-icon"
        style={{ color: "rgb(161 148 138)" }}
      />
    ),
    Rain: <WiRain className="weather-icon" style={{ color: "#8ad0ce" }} />,
    Snow: (
      <WiSnowflakeCold className="weather-icon" style={{ color: "white" }} />
    ),
    Thunderstorm: (
      <WiLightning className="weather-icon" style={{ color: "pink" }} />
    ),
    Drizzle: (
      <WiRaindrops className="weather-icon" style={{ color: "skyblue" }} />
    ),
  };

  /* get Day of the week */
  const getDay = (dayNumber) => {
    let today = new Date();
    let dataDate = new Date(today.setDate(today.getDate() + dayNumber));
    let year = dataDate.getFullYear();
    let mon = String(dataDate.getMonth() + 1).padStart(2, "0");
    let day = String(dataDate.getDate()).padStart(2, "0");

    let setDate = year + "." + mon + "." + day;
    return setDate;
  };

  return (
    <StyledSlick {...settings}>
      {dailyWeatherData &&
        dailyWeatherData.map((data) => {
          let weatherIcon = iconStyle[`${data.weather}`];
          if (!weatherIcon) {
            weatherIcon = iconStyle["Clear"];
          }
          return (
            <div key={data.day + "_key"}>
              <div key={data.day + "_key"}>{iconStyle[`${data.weather}`]}</div>
              <StyledWeatherInfo>
                <h1>{data.temp + "°"}</h1>
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
                        <h4>{data.feels + "°"}</h4>
                      </li>
                      <li>
                        <h4>{data.wind + " km/s"}</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </StyledWeatherInfo>
              <StyledDayInfo>
                <hr />
                <h2>{getDay(data.day)}</h2>
                <hr />
                <h2>{data.weather}</h2>
                <hr />
              </StyledDayInfo>
            </div>
          );
        })}
    </StyledSlick>
  );
}
export default SlideWeather;
