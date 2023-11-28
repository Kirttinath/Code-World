import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/weatherapp/icons/sunny.svg",
  "01n": "/weatherapp/icons/night.svg",
  "02d": "/weatherapp/icons/day.svg",
  "02n": "/weatherapp/icons/cloudy-night.svg",
  "03d": "/weatherapp/icons/cloudy.svg",
  "03n": "/weatherapp/icons/cloudy.svg",
  "04d": "/weatherapp/icons/perfect-day.svg",
  "04n": "/weatherapp/icons/cloudy-night.svg",
  "09d": "/weatherapp/icons/rain.svg",
  "09n": "/weatherapp/icons/rain-night.svg",
  "10d": "/weatherapp/icons/rain.svg",
  "10n": "/weatherapp/icons/rain-night.svg",
  "11d": "/weatherapp/icons/storm.svg",
  "11n": "/weatherapp/icons/storm.svg",
};
