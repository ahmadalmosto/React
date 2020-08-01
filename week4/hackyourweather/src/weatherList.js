import React from "react";
import RenderCity from "./RenderCity";

const WeatherList = ({ weatherData, setWeatherData }) => {
  return (
    <div>
      {weatherData
        .map((oneCity) => (
          <RenderCity
            oneCity={oneCity}
            weatherData={weatherData}
            setWeatherData={setWeatherData}
            key={oneCity.id}
          />
        ))

        .reverse()}
    </div>
  );
};

export default WeatherList;
