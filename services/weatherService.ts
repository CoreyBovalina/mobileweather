import axios from "axios";

const apiKey = "b285b1b23ca1493383c11432212310"; //would prefer to store apikeys in secret or using environment config, but for demo purposes this will do
const baseUrl = "http://api.weatherapi.com/v1/";

//this isn't used as getForecast also gets current weather
const getCurrentWeather = async (location: string) => {
  const url = baseUrl + "current.json";
  return axios.get(url, { params: { key: apiKey, q: location } });
};

const getForecast = async (location: string) => {
  const url = baseUrl + "forecast.json";
  return axios.get(url, { params: { key: apiKey, q: location, days: 3, aqi: "no", alerts: "no" } });
};

export { getCurrentWeather, getForecast };
