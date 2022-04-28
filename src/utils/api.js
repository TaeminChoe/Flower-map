import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const ONE_CALL = "https://api.openweathermap.org/data/2.5/onecall";

export const getWeatherApi = (lat, lng) => {
  axios({
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
      const weatherObj = res.data;
      console.log("weather res:: ", weatherObj);
      return weatherObj;
    })
    .catch((e) => {
      console.log("axios error :: ", e);
    });
};
