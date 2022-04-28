import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {
  WiDaySunnyOvercast,
  WiRain,
  WiCloudy,
  WiSnowflakeCold,
  WiLightning,
  WiRaindrops,
} from "weather-icons-react";
import axios from "axios";
// import { useQuery } from "react-query";
//css
import { StyledWeatherInfo } from "../css/StyledWeatherInfo";
import { StyledDayInfo } from "../css/StyledDayInfo";
//util
import { REGION_LIST } from "../utils/regionData";
import { WEATHER_LIST } from "../utils/weatherData";

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
  const [weatherObj, setWeatherObj] = useState();
  const [dailyWeatherData, setDailyWeatherData] = useState();
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

  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const ONE_CALL = "https://api.openweathermap.org/data/2.5/onecall";

  async function getWeatherApi(lat, lng) {
    await axios({
      url: ONE_CALL,
      params: {
        lat: lat,
        lon: lng,
        exclude: "current",
        appid: API_KEY,
        units: "metric",
      },
    })
      .then((res) => {
        setWeatherObj(res.data.daily);
      })
      .catch((e) => {
        console.log(e.message);
      })
      .finally(() => parseWeatherObj());
  }

  //-----------------------------------------------------useQuery 나쁜놈
  // const { isLoading, isError, data, error } = useQuery(
  //   "weather",
  //   getWeatherApi(region.lat, region.lng),
  //   {
  //     onSuccess: (data) => {
  //       console.log("query weather :: ", data);
  //     },
  //     onError: (e) => {
  //       console.log("query error:: ", e.message);
  //     },
  //   }
  // );
  //-----------------------------------------------------useQuery 나쁜놈

  const parseWeatherObj = (weatherObj) => {
    if (!weatherObj) {
      setDailyWeatherData(WEATHER_LIST);
    } else {
      let dailyWeathers = [];
      weatherObj.map((daily, index) => {
        let dailyWeather = {
          day: index,
          weather: daily.weather[0].main,
          temp: daily.temp.day,
          feels: daily.feels_like.day,
          wind: daily.wind_speed,
        };
        dailyWeathers.push(dailyWeather);
      });
      setDailyWeatherData(dailyWeathers);
    }
  };

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    setRegion(REGION_LIST.find((region) => region.id === Number(id)));
  }, []);

  useEffect(() => {
    if (!region) return;
    getWeatherApi(region.lat, region.lng);
  }, [region]);

  useEffect(() => {
    if (!weatherObj) return;
    parseWeatherObj(weatherObj);
  }, [weatherObj]);

  useEffect(() => {
    if (!dailyWeatherData) return;
    console.log("dailyWeatherData", dailyWeatherData);
  }, [dailyWeatherData]);

  return (
    <StyledSlick {...settings}>
      {dailyWeatherData &&
        dailyWeatherData.map((data, index) => {
          return (
            <div key={data.day + "_key"}>
              {data.weather == "Clear" && (
                <WiDaySunnyOvercast
                  className="weather-icon"
                  style={{ color: "gold" }}
                />
              )}
              {data.weather == "Clouds" && (
                <WiCloudy className="weather-icon" style={{ color: "grey" }} />
              )}
              {data.weather == "Rain" && (
                <WiRain className="weather-icon" style={{ color: "navy" }} />
              )}
              {data.weather == "Snow" && (
                <WiSnowflakeCold
                  className="weather-icon"
                  style={{ color: "white" }}
                />
              )}
              {data.weather == "Thunderstorm" && (
                <WiLightning
                  className="weather-icon"
                  style={{ color: "pink" }}
                />
              )}
              {data.weather == "	Drizzle" && (
                <WiRaindrops
                  className="weather-icon"
                  style={{ color: "skyblue" }}
                />
              )}
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
                <h2>Monday</h2>
                <hr />
                <h2>{data.weather}</h2>
              </StyledDayInfo>
            </div>
          );
        })}
    </StyledSlick>
  );
}
export default SlideWeather;
