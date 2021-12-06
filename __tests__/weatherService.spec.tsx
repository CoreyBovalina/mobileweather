import axios from "axios";

import { getCurrentWeather, getForecast } from "../services/weatherService";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Get Forecast", () => {
  it("Fetches forecast from weather api for given location", async () => {
    // setup
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          current: {},
          location: {},
          forecast: {},
        },
      })
    );

    // work
    const forecast = await getForecast("15317");

    // expect
    expect(forecast).toEqual({
      data: {
        current: {},
        location: {},
        forecast: {},
      },
    });
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});

describe("Get Current Weather", () => {
  it("Fetches current weather from weather api for given location", async () => {
    // setup
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          current: {},
          location: {},
        },
      })
    );

    // work
    const forecast = await getCurrentWeather("15317");

    // expect
    expect(forecast).toEqual({
      data: {
        current: {},
        location: {},
      },
    });
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
